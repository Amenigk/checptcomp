import React from 'react'
import myImage from './Ameni.jpg'

function ProfilePhoto() {
  return (
    <div >
        <img src={myImage} alt={"myphoto"} width={150} height={150}/>
    </div>
  )
}

export default ProfilePhoto