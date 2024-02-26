import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Myorder = ({ posts, amount, post1 }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", minHeight: "100vh", marginTop: "60px" }}>
            <div>
                <Navbar post1={post1} />
            </div>
            <div>
                {
                    posts ?
                        <div>
                            <h3 className='text-center text-white mb-4'>Your order will be delivery in 30mins</h3>
                            <div className='table-responsive col-md-8 offset-md-2 offset-1 col-10'>
                                {posts ?
                                    <table className='table table-bordered bg-white text-center'>
                                        <thead >
                                            <tr className='text-success'>
                                                <th>Food Item</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Total Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                posts.map((pos) => {
                                                    if (pos.name !== undefined) {
                                                        return (
                                                            <tr>
                                                                <td>{pos.name}</td>
                                                                <td>{pos.price}</td>
                                                                <td>{pos.val}</td>
                                                                <td>{pos.price * pos.val}</td>
                                                            </tr>
                                                        )
                                                    }
                                                    return (
                                                        ''
                                                    )
                                                })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr className='text-success' style={{ fontWeight: "700" }}>
                                                <td colSpan={3}>Total Price</td>
                                                <td>{amount}</td>
                                            </tr>
                                        </tfoot>

                                    </table>
                                    :
                                    ''
                                }
                            </div>
                        </div>
                        :
                        <div>
                            <h3 className='text-center text-white'>You don't have any order</h3>
                        </div>
                }
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Myorder