import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/ConTexT'
const NavbaR = () => {
    let { userauth, logoutuser } = useContext(AuthContext)
    return (
        <>
            {userauth ? (
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/" className="nav-link px-2 link-secondary">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/add" className="nav-link px-2 link-dark">
                                add post
                            </Link>
                        </li>
                        <li>
                            <Link to="/feed" className="nav-link px-2 link-dark">
                                Your posts
                            </Link>
                        </li>


                    </ul>
                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-primary me-2" onClick={logoutuser}>
                            Logout
                        </button>
                    </div>
                </header>
            ) : (
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/" className="nav-link px-2  disabled link-secondary">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/add" className="nav-link px-2 disabled  link-dark">
                                add post
                            </Link>
                        </li>
                        <li>
                            <Link to="/feed" className="nav-link px-2  disabled link-dark">
                                Your posts
                            </Link>
                        </li>


                    </ul>
                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-primary me-2">
                            <Link to="/login" className="nav-link px-2 link-dark">
                                login
                            </Link>
                        </button>
                        <button type="button" className="btn btn-outline-primary me-2">
                            <Link to="signup" className="nav-link px-2 link-dark">
                                signup
                            </Link>
                        </button>
                    </div>
                </header>
            )}

        </>
    )
}

export default NavbaR
