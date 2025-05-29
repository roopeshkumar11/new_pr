import React from 'react'
import { useParams } from 'react-router-dom'

function Deleteuser() {

    const {id}=useParams();
    
  return (
    <div>Deleteuser {id}
    {console.log("id",id)}
    </div>
    
  )
}

export default Deleteuser