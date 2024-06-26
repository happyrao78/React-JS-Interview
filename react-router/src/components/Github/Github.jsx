import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
  const data = useLoaderData()//automatically loads the data
  // const [data,setData] = useState([])
  //   useEffect(()=>{
  //       fetch('https://api.github.com/users/happyrao78')
  //       .then(response => response.json())
  //       .then(data => {
  //           console.log(data)
  //           setData(data);
  //       })
  //   },[])
    return(
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>Github Followers: {data.followers} 
    <img  className=' flex justify-center flex-1 rounded-2xl ' src={data.avatar_url} alt='Happy Yadav' width={300} style={{ display: 'block', margin: '0 auto' }}/>
    </div>
  )
}

export default Github
export const githubInfoLoader= async ()=>{
   const response  = await fetch('https://api.github.com/users/happyrao78')
   return response.json()
}