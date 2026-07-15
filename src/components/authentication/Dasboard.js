import React, { useContext } from 'react'
import { UserContext } from './UserProvider'

const Dasboard = () => {
    const {isLoggedIn} = useContext(UserContext)
  return (
    <div>{
        isLoggedIn ? 'Hi Welcome' : 'Please loggedin'
        }</div>
  )
}

export default Dasboard