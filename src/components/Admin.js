import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'

const Admin = () => {
    const [fdname, setfdname] = useState('')
    const [fdphoto, setfdphoto] = useState('')
    const [fdprice, setfdprice] = useState('')
    const API_URL = 'https://foodbackend-dh1r.onrender.com/api/admin/'
    const handlesubmit = async (e) => {
        e.preventDefault()
        console.log(fdname)
        console.log(fdphoto)
        const formdata = new FormData()
        formdata.append('fdname', fdname)
        formdata.append('fdphoto', fdphoto)
        formdata.append('fdprice', fdprice)
        await axios.post(API_URL, formdata).then((res) => {
            window.location.reload()
        }).catch((er) => {
            alert(er)
        })
    }
    return (
        <div className='d-flex flex-column justify-content-between' style={{ height: "100vh" }}>
            <div><Navbar /></div>
            <div>
                <h1 className='text-center text-white'>Add Fooditems</h1>
                <form className='offset-md-4 col-md-4 col-10 offset-1' onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="foodname" className="form-label">Food Name</label>
                        <input type="text" className="form-control" id="foodname" onChange={(e) => setfdname(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Add Food Image</label>
                        <input type="file" className="form-control" id="image" aria-describedby="image" onChange={(e) => setfdphoto(e.target.files[0])} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Food Price</label>
                        <input type="text" className="form-control" id="foodname" onChange={(e) => setfdprice(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default Admin