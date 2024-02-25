import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../components/Postslice'
import { useDispatch } from 'react-redux'
import { postRemove } from '../components/Postslice'


const Cart = ({ handlesubmit, post1 }) => {
    const posts = useSelector(selectAllPosts)
    const dispatch = useDispatch()
    var totalamount = Number(0)
    const handleremove = (id) => {
        dispatch(
            postRemove(
                {
                    id,
                }
            )
        )
    }
    const renderedposts = posts.map((post, index) => (
        <div>
            {
                post.photo !== undefined ?
                    <div className="card mb-3 mx-auto col-10" style={{ maxWidth: "540px", height: "130px" }}>
                        <div className="row">
                            <div className="col-4">
                                <img src={`http://localhost:5000/images/${post.photo}`} className="img-fluid rounded-start" alt="..." style={{ height: "130px" }} />
                            </div>
                            <div className="col-8 d-flex">
                                <div className="card-body" style={{ marginLeft: "-40px" }}>
                                    <h5 className="card-title text-center">{post.name}</h5>
                                    <h6 className="card-title text-center">Price = {post.price}</h6>
                                    <h6 className="card-title text-center">Qty = {post.val}</h6>
                                    <h6 className="card-title text-center" >Total Amount = {post.price * post.val}</h6>
                                    <h5 style={{ display: "none" }}>{totalamount = totalamount + (Number(`${post.price}`) * Number(`${post.val}`))}</h5>
                                </div>
                                <div>
                                    <button className='btn btn-danger btn-sm' onClick={() => handleremove(index)}><i className='bi bi-trash'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    ''
            }
        </div>
    ))
    return (
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar post1={post1} />
            <div>
                {renderedposts}
                {
                    posts.length > 1 ?
                        <div>
                            <h3 className='text-center text-white my-3'>Total Amount = {totalamount}</h3>
                            <h4 className='text-center'><button className='btn btn-success' onClick={() => handlesubmit(totalamount, posts)}>Place the order</button></h4>

                        </div>
                        :
                        <h3 className='text-center text-white my-5'>Your Cart Empty</h3>
                }

            </div>
            <Footer />
        </div>
    )
}

export default Cart