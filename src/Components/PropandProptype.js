import React from 'react'
import prototype  from 'prop-types'

export const PropandProptype = (props) => {
    const {color} = props

return (
    <div style={{backgroundColor:color, padding:"20px" , color:"White" , textAlign:'center'}} >PropandProptype {color}</div>
)
}

PropandProptype.prototype = {
    color:prototype.oneOf(["red","green","blue"]).isRequired
}
