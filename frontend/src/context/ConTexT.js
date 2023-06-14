import { createContext, useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [last_name, setlast_name] = useState('')
    const [email, setemail] = useState('')
    const [first_name, setfirst_name] = useState('')
    
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [userauth, setuserauth] = useState(() => localStorage.getItem('authTokens') ? true : false)
    let [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    
    const useronchange = (e) => {
        setusername(e.target.value)
    }

    const passwordonchange = (e) => {
        setpassword(e.target.value)
    }
    const first_nameonchange = (e) => {
        setfirst_name(e.target.value)
    }
    const last_nameonchange = (e) => {
        setlast_name(e.target.value)
    }
    const emailonchange = (e) => {
        setemail(e.target.value)
    }



    const loginuser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/login/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ username: username, password: password })
        })
        let data = (await response.json())
        if (response.status === 200) {
            setAuthTokens(data)
            localStorage.setItem('authTokens', JSON.stringify(data))
            console.log(data)
            setuserauth(true)
            navigate('/')
        }
        else {
            alert('something went wrong!')
        }
    }

    

    let signinuser = async () =>{
        const response = await fetch ('http://127.0.0.1:8000/api/signup/',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ username: username, password: password , first_name:first_name , last_name:last_name , email:email })
        })
        let data = await response.json()
        console.log(data)
    }




    let logoutuser = () =>{
        setAuthTokens(null)
        setuserauth(false)
        localStorage.removeItem('authTokens')
    }


    let updateToken = async () =>{
        let response = await fetch ('http://127.0.0.1:8000/api/refresh/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'refresh': authTokens?.refresh })
        })
        let data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data)
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else {
            logoutuser()
        }
        if (loading===true){
            setLoading(false)
        }

    }
    useEffect(() => {

        if (loading) {
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4

        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)

    }, [authTokens, loading])

    let contextData={
        username:username,
        password:password,
        first_name:first_name,
        last_name:last_name,
        email:email,
        setfirst_name:setfirst_name,
        setlast_name:setlast_name,
        setemail:setemail,
        first_nameonchange:first_nameonchange,
        last_nameonchange:last_nameonchange,
        emailonchange:emailonchange,
        setusername:setusername,
        setpassword:setpassword,
        useronchange:useronchange,
        passwordonchange:passwordonchange,
        authTokens:authTokens,
        userauth:userauth,

        loginuser:loginuser,
        signinuser:signinuser,
        logoutuser:logoutuser

    }

    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}

