import React, { useState } from 'react'

const User = () => {
  const [user,setUser] = useState({
    name:"maadeha",
    age:22,
    profession:"student"
  });
  const {name,age,profession} = user;
  const [isMarried,setisMarried] = useState(false);
  const maritalStatus = () => {
    setisMarried(!isMarried);
  }
  return (
    <>
    <button onClick={maritalStatus}>Update marital status</button>
    {
      isMarried?(
       <>
       <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{profession}</h1>
      </>
      ):null
    }   
    </>
  )
}

export default User
