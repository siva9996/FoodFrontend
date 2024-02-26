import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Login = () => {
    const navigate = useNavigate()
    const [email1, setemail1] = useState('')
    const [password1, setpassword1] = useState('')
    const [admin, setadmin] = useState(false)
    const API_URL = 'https://foodbackend-dh1r.onrender.com/api/login/'
    const hanldesubmit = (e) => {
        e.preventDefault()
        if (admin) {
            axios.post(API_URL, { email: email1, password: password1, ad: admin }).then((res) => {
                localStorage.setItem("authToken", res.data.authToken)
                navigate('/admin')
            }).catch((er) => {
                alert(er.response.data.err)
            })
        } else {
            axios.post(API_URL, { email: email1, password: password1 }).then((res) => {
                localStorage.setItem("authToken", res.data.authToken)
                navigate('/')
            }).catch((er) => {
                alert(er.response.data.err)
            })
        }
    }
    const handlechange = () => {
        setadmin(!admin)
    }
    return (
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", minHeight: "100vh", marginTop: "50px" }}>
            <div>
                <Navbar />
            </div>
            <div>
                <form className='offset-md-4 col-md-4 offset-1 col-10' onSubmit={hanldesubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputname" aria-describedby="emailHelp" onChange={(e) => setemail1(e.target.value)} />
                        <div id="emailHelp" className="form-text text-info">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setpassword1(e.target.value)} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <input type='checkbox' className='form-check' onChange={handlechange} id='check' />
                        <label className="form-label ms-3 mt-1" htmlFor="check" >Admin login</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to='/createuser' className='btn btn-danger m-3'>Are you new User</Link>
                </form>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Login