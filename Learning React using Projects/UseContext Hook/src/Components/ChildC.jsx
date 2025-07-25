import React, { useContext } from 'react'
import ChildB from './ChildB'
import { UserContext } from '../App.jsx' //Because of this only child c have a access to the data from the parent 
import { ThemeContext } from '../App.jsx'

const ChildC = () => {
    // const user = useContext(UserContext);
    const theme = useContext(ThemeContext);
  return (
    <div>
        {/**Want to access data here  */}
        
     {theme}
    </div>
  )
}

export default ChildC
