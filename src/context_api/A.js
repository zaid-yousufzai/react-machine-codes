import React, { createContext } from 'react'
import B from './B';

const dat=createContext();
const A = () => {
  return (
    <div>
        <div>
        <dat.Provider value="zaid">
<B/>
        </dat.Provider>
    </div>
    </div>
  )
}

export default A
export {dat}