import React from 'react'
import UserProvider from './UserProvider'
import Navbar from './Navbar'
import Dasboard from './Dasboard'

const Main = () => {
  return (
    <div>
        <UserProvider>
            <Navbar/>
            <Dasboard/>
        </UserProvider>
    </div>
  )
}

export default Main