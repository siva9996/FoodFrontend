import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousal from '../components/Carousal'
import Card from '../components/card'
import axios from 'axios'
import CircleLoader from "react-spinners/CircleLoader";


const Home = ({ post1 }) => {
    const [val, setval] = useState('')
    const [search, setsearch] = useState('')
    const [loading, setloading] = useState(false)
    const handlesearch = (e) => {
        e.preventDefault()
        setsearch(val)
    }
    const onchildInput = (value) => {
        setval(value)
    }
    const [fooditem, setfooditem] = useState([])
    const API_URL = 'http://localhost:5000/api/admin/'
    useEffect(() => {
        setloading(true)
        axios.get(API_URL).then((res) => {
            setfooditem(res.data)
            setloading(false)
        }).catch((er) => {
            alert(er)
            setloading(false)
        })

    }, [])
    return (
        <div>
            {
                loading ?
                    <div className='loader'>
                        <CircleLoader
                            color={'#36d7b7'}
                            loading={loading}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    :
                    <div>
                        <div><Navbar
                            post1={post1}
                        /></div>
                        <div><Carousal
                            handlesearch={handlesearch}
                            onchildInput={onchildInput}
                        /></div>
                        <div><Card
                            items={fooditem.filter(item => ((item.name).toLowerCase()).includes((search).toLowerCase()))}
                        /></div>
                        <div><Footer /></div>
                    </div>
            }

        </div>
    )
}

export default Home