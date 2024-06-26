import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//   path : '/',
//   element : <Layout />,
//   children: [
//     {
//       path : "",
//       element : <Home />
//     },
//     {
//       path : "About",
//       element : <About />
//     },
//     {
//       path: "Contact",
//       element : <Contact />
//     }
//   ]

//   }
// ])
//this is easier as nesting is easily visible 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
