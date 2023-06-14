import React from 'react'
import AuthContext from '../context/ConTexT'
import { useContext, useState, useEffect } from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const YourStuff = () => {
  let { authTokens } = useContext(AuthContext)
  let [arr, setarr] = useState([])

  let getuserstuff = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/userdata/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    const data = await response.json()
    setarr(data)
  }

  useEffect(() => {
    getuserstuff()
  }, [])
  return (
    <div>
      {arr.map((items) => {
        return (
          <>
            <br />
            <div className='container text-center' style={{ "width": "850px" }}>


              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">{items.title}</h5>
                  <p className="card-text">
                    {items.message}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><div>
                    <SyntaxHighlighter language="javascript" showLineNumbers>
                      {items.code_snippet}
                    </SyntaxHighlighter></div>
                  </li>
                  <li className="list-group-item">{items.time}</li>
                </ul>

              </div>



            </div>
            <br />
            <br />

          </>

        )


      })}
    </div>
  )
}

export default YourStuff
