import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading,setLoading] = useState(true)//so that data  is loaded and display the loader untill it is loaded
  const dispatch = useDispatch();
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    // .catch(()=>{
    //   console.log("ERROR :: APP.JSX");
    // })
    .finally(()=> setLoading(false)
    )
  },[])

  return !loading ? (
    <div className='min-h-screen flex justify-center bg-gray-900 text-white'>
      <div  className='w-full block'>
        <Header />
        <main>
        mini blog
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App;
 