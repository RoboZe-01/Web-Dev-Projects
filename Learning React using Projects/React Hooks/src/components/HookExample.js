import React from 'react';
import React, { useEffect } from 'react'

const HookExample = () => {
 useEffect(() => {
      console.log("re-rendered");

      return () => {
        console.log("Unmounted !!")
      };
    },[]) ;

    
  return (
    <div>HookExample</div>
  )
}

export default HookExample