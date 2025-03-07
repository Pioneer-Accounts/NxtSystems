import React, { useState } from 'react'

const render = () => {
  let[changeText,setChangeText] = useState(true);
    const handler =()=>{
    return setChangeText(!changeText)
  }
}

export default render