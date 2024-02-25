import './App.css';
import Home from './Screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Screens/Signup.js';
import Admin from './components/Admin.js';
import Cart from './Screens/Cart.js';
import Myorder from './components/Myorder.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { AllPostRemove } from './components/Postslice.js'
import CircleLoader from "react-spinners/CircleLoader";

function App() {
  const [posts, setposts] = useState('')
  const [amount, setamount] = useState('')
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    setloading(false)
  })

  const handlesubmit = (amount, posts) => {
    setposts(posts)
    setamount(amount)
    dispatch(
      AllPostRemove(
        {
          posts
        }
      )
    )
    alert('Your order placed successfully')
  }
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
            <BrowserRouter>
              <div className='bg-secondary App'>
                <Routes>
                  <Route path='/' element={<Home
                    post1={posts}
                  />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/createuser' element={<Signup />} />
                  <Route path='/admin' element={<Admin />} />
                  <Route path='/cart' element={<Cart
                    handlesubmit={handlesubmit}
                    post1={posts}
                  />} />
                  <Route path='/myorder' element={<Myorder
                    posts={posts}
                    amount={amount}
                    post1={posts}
                  />} />
                </Routes>
              </div>
            </BrowserRouter>
          </div>
      }
    </div>
  );
}

export default App;
