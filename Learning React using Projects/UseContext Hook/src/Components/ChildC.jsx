import React, { useContext } from 'react'
import ChildB from './ChildB'
import { UserContext } from '../App' //Because of this only child c have a access to the data from the parent 

const ChildC = () => {
    const user = useContext(UserContext);
  return (
    <div>
        {/**Want to access data here  */}
        
        data : {user.name}
    </div>
  )
}

export default ChildC
