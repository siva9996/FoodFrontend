import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Signup = () => {
    const navigate = useNavigate()
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [address, setaddress] = useState('')
    const API_URL = 'https://foodbackend-dh1r.onrender.com/api/createuser/'
    const hanldesubmit = (e) => {
        e.preventDefault()
        axios.post(API_URL, { name: name, location: address, email: email, password: password }).then((res) => {
            navigate('/login')
        }).catch((er) => {
            alert(er.response.data.errors[0].msg)
        })
    }
    return (
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", minHeight: "100vh" }} >
            < div >
                <Navbar />
            </div >
            <div style={{ marginTop: "70px" }}>
                <form className='offset-md-4 col-md-4 offset-1 col-10' onSubmit={hanldesubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputname" aria-describedby="emailHelp" onChange={(e) => setemail(e.target.value)} />
                        <div id="emailHelp" className="form-text text-info">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputaddress" onChange={(e) => setaddress(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to='/login' className='btn btn-danger m-3'>Already a User</Link>
                </form>
            </div>
            <div>
                <Footer />
            </div>
        </div >
    )
}

export default Signup