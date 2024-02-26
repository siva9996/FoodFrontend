import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { postAdded } from '../components/Postslice'
import { useNavigate } from 'react-router-dom'

const Card = ({ items }) => {
    const API_URL = 'https://foodbackend-dh1r.onrender.com/api/admin/'
    const dispatch = useDispatch()
    const [val, setval] = useState(1)
    const navigate = useNavigate()
    const handlechange = (e) => {
        setval(e)
    }
    const hanldecart = (id) => {
        if (localStorage.getItem("authToken")) {
            axios.get(API_URL + id).then((res) => {
                const name = res.data[0].name
                const photo = res.data[0].photo
                const price = Number(res.data[0].price)
                dispatch(
                    postAdded(
                        {
                            id,
                            name,
                            photo,
                            price,
                            val,
                        }
                    )
                )
            }).catch((er) => {
                alert(er)
            })
        } else {
            alert('Login required')
            navigate('/login')
        }
    }
    return (
        <div className='container w-100 text-center text-white'>
            <div className='row d-flex justify-content-center' style={{ marginLeft: "-50px" }}>
                {items.map((item) => (
                    <div className="card mt-5 ms-5 col-md-4 bg-dark" style={{ "width": "18rem", "maxHeight": "450px" }}>
                        <img src={`https://foodbackend-dh1r.onrender.com/images/${item.photo}`} className="card-img-top w-100 mt-2" alt="..." style={{ width: "260px", height: "200px" }} />
                        <div className="card-body">

                            <h5 className="card-title">{item.name}</h5>
                            <h6 className="card-title">Price &#8377;{item.price}</h6>
                            <div className='container w-100'>
                                <select className='m-2 h-100 bg-success rounded' onChange={(e) => handlechange(e.target.value)}>
                                    {Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <hr />
                            <button className='btn btn-success justify-center ms-2' onClick={() => hanldecart(item._id)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card