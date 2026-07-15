import React from 'react'
import {dat} from './A'
const D = () => {
  return (
    <div>
        <dat.Consumer>
            {
                (user)=>
                {
                    return(
                        <h1>{user}</h1>
                    )
                }
            }
        </dat.Consumer>
    </div>
  )
}

export default D