import React from 'react'
import "./Body.css"

function Body(props) {
  return (
    <div className='whole'>
        <table className='events-table'>
  
  <tbody className='neymer'>
    <tr className='neymer'>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.date}</td>
    </tr>
   
   
  </tbody>
</table>

      
    </div>
  )
}

export default Body
