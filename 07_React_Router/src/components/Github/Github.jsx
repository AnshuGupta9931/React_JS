import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
//    const [data,setData] = useState(0);
//     useEffect(()=>{
//         fetch("https://api.github.com/users/hiteshchoudhary")
//         .then(response=>response.json())
//         .then(data => setData(data))
//     },[])
const data = useLoaderData();
  return (
    <div className='text-center text-3xl text-white bg-gray-700 p-4 m-6'>
        <h1>Github followers:{data.followers}</h1>
        <h1>Github followings : {data.following}</h1>
        <img src={data.avatar_url} alt="Hitesh Sir ki Photo" width={300} />
        </div>
  )
}

export default Github
export const githubInfoLoader = async()=>{
   const response = await fetch("https://api.github.com/users/hiteshchoudhary")
   return response.json();
}