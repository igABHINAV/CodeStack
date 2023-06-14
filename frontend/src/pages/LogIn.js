import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/ConTexT'
const LogIn = () => {
  let { loginuser, username, password, useronchange, passwordonchange } = useContext(AuthContext)
  return (
    <div className='container ' >
    <h1>Welcome to the Login page !</h1>

    <br />
    <br />





    <span className="card text-center" style={{ "width": "400px" }} >
      <div className="card-header text-center">
        Log In
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
          <label htmlFor="validationCustomUsername" className="form-label text-center">Password</label>
          <div className="input-group has-validation" style={{ "width": "350px" }}>
            <span className="input-group-text" id="inputGroupPrepend">$$</span>
            <input type="password" onChange={passwordonchange} placeholder='password' value={password} className="form-control text-center" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />

          </div>
        </div>
        <br />
        <br />
        <button className="btn btn-primary" onClick={loginuser}>Login</button>
      </div>
      <div className="card-footer text-muted">
        Don't have an account ? <Link to='/signup'>Sign in</Link>
      </div>
    </span>



  </div>







  )
}

export default LogIn
