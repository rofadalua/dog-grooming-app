import React from 'react'

const UserAccount = (props) => {

    return(
         <li>
        {props.user.first_name} - {props.user.last_name} 
        </li>
        
    )
    
}


export default UserAccount