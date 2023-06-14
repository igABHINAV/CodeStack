import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/ConTexT'
const SignIn = () => {
  let { signinuser, username, password, first_name, last_name, email, first_nameonchange, last_nameonchange, emailonchange, useronchange, passwordonchange } = useContext(AuthContext)
  return (
    <>
     


      <div className='container '>
        <h1>Welcome to the Sign Up page !</h1>
        <h4>Register yourself here...</h4>
        <br />
        <br />





        <span className="card " style={{ "width": "400px" }} >
          <div className="card-header text-center">
            Sign in
          </div>
          <div className="card-body text-center">
            


            <div className="col-md-4">
              <label htmlFor="validationCustomUsername" className="form-label">Username</label>
              <div className="input-group has-validation" style={{ "width": "350px" }}>
                <span className="input-group-text text-center" id="inputGroupPrepend">@</span>
                <input type="text" className="form-control text-center" value={username} placeholder='username' onChange={useronchange} id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />

              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="validationCustomUsername" className="form-label">first_name</label>
              <div className="input-group has-validation" style={{ "width": "350px" }}>
                <span className="input-group-text text-center" id="inputGroupPrepend"> : ~ </span>
                <input type="text" className="form-control text-center" value={first_name} placeholder='first_name' onChange={first_nameonchange} id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />

              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustomUsername" className="form-label">last_name</label>
              <div className="input-group has-validation" style={{ "width": "350px" }}>
                <span className="input-group-text text-center" id="inputGroupPrepend"> : ~ </span>
                <input type="text" className="form-control text-center" value={last_name} placeholder='last_name' onChange={last_nameonchange} id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />

              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustomUsername" className="form-label">email</label>
              <div className="input-group has-validation" style={{ "width": "350px" }}>
                <span className="input-group-text text-center" id="inputGroupPrepend"> *</span>
                <input type="text" className="form-control text-center" value={email} placeholder='email' onChange={emailonchange} id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />

              </div>
            </div>



            <div className="col-md-4">
              <label htmlFor="validationCustomUsername" className="form-label text-center">Password</label>
              <div className="input-group has-validation" style={{ "width": "350px" }}>
                <span className="input-group-text" id="inputGroupPrepend">$$</span>
                <input type="password" onChange={passwordonchange} placeholder='password' value={password} className="form-control text-center" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />

              </div>
            </div>
            <br />
            <br />
            <button className="btn btn-primary" onClick={signinuser}>Create an account</button>
          </div>
          <div className="card-footer text-muted">
            Already have an account ? <Link to='/login'>Log in</Link>
          </div>
        </span>



      </div>




    </>

  )
}

export default SignIn
