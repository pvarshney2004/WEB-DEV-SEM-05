import React from 'react'

const Profile = ({userData}) => {
  return (
    <div>
        <img src="{userData.avatar_url}" alt="profile.png"
        className='h-20 w-20 rounded-full' />
    </div>
  )
}

export default Profile