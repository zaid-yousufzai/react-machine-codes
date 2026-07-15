import React, { useContext } from 'react'
import {data} from './A'
const C = () => {
    const user=useContext(data)
  return (
    <div>{user}</div>
  )
}

export default C