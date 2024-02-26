import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../components/Postslice'
import Nav from 'react-bootstrap/Nav';
import Navbar1 from 'react-bootstrap/Navbar';


const Navbar = ({ post1 }) => {
    const navigate = useNavigate()
    const posts = useSelector(selectAllPosts)
    const handlelogout = () => {
        localStorage.removeItem("authToken")
        navigate('/')
    }
    return (
        <div style={{ overflow: "hidden", position: "fixed", top: "0", zIndex: "5", width: "100%" }} className='bg-secondary'>
            <Navbar1 collapseOnSelect expand="md" className="bg-body-tertiary">
                <Navbar1.Brand className="navbar-brand fs-3 fst-italic ms-3" style={{ color: "#08d37e", fontWeight: "700" }}><Link to='/' className='text-decoration-none'><i className='bi bi-airplane me-2'></i>Food</Link></Navbar1.Brand>
                <Navbar1.Toggle aria-controls="responsive-navbar-nav" className='me-3' />
                <Navbar1.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link active text-dark fs-5 ms-2" aria-current="page" to="/"><i className='bi bi-house me-1'></i> Home</Link>
                        {(localStorage.getItem("authToken")) ?
                            <li className="nav-item">
                                <Link className="nav-link active text-dark fs-5 ms-2" aria-current="page" to="/myorder">My orders
                                    {post1 ?
                                        <span>&#128757;</span>
                                        :
                                        ''
                                    }
                                </Link>
                            </li>
                            : ""
                        }
                    </Nav>
                    <Nav>
                        {(localStorage.getItem("authToken")) ?
                            <div className='d-flex ms-2'>
                                <Nav.Link><Link className="btn bg-white text-success" to="/cart"><i className='bi bi-cart me-1'></i> Cart
                                    {posts.length > 1 ?
                                        <span className='badge bg-success mx-1'> {posts.length - 1}</span>
                                        :
                                        ''
                                    }
                                </Link></Nav.Link>
                                <Nav.Link>
                                    <div className='btn bg-white text-success mx-1' onClick={handlelogout}><i className='bi bi-box-arrow-right me-1'></i> Logout</div>
                                </Nav.Link>
                            </div>
                            :
                            <div className='d-flex ms-2'>
                                <Nav.Link>
                                    <Link className="btn bg-white text-success" to="/login"><i className='bi bi-box-arrow-in-left me-1'></i> Login</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link className="btn bg-white text-success mx-1" to="/createuser"><i className='bi bi-person-add me-1'></i> Signup</Link>
                                </Nav.Link>
                            </div>
                        }
                    </Nav>
                </Navbar1.Collapse>
            </Navbar1>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary text-danger">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-3 fst-italic" style={{ color: "#08d37e", fontWeight: "700" }} to="/">&#128743;Food</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon my-toggler"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active text-dark fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link active text-dark fs-5" aria-current="page" to="/myorder">My orders</Link>
                                </li>
                                : ""
                            }
                        </ul>
                        {(localStorage.getItem("authToken")) ?
                            <div>
                                <Link className="btn bg-white text-success mx-1" to="/cart">Cart
                                    {posts.length > 1 ?
                                        <span className='badge bg-success ms-1'> {posts.length - 1}</span>
                                        :
                                        ''
                                    }
                                </Link>
                                <div className='btn bg-white text-success mx-1' onClick={handlelogout}>Logout</div>
                            </div>
                            :
                            <div className='d-flex'>
                                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>

                                <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
                            </div>
                        }
                    </div>
                </div>
            </nav> */}
        </div >
    )
}

export default Navbar
