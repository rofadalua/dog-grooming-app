//this will be functional because it will just show a list of users
//props in argument (props) and no render because they are just functions
import React from 'react'
import UserAccount from './UserAccount'

const Users = (props) => {

    return(
        <div>
           {props.users.map(user =>
             <div key={user.id}> <UserAccount user={user}/> </div>)}
        </div>
    )
}

export default Users