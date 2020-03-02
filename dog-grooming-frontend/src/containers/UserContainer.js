//"all my components come inside the div"
//render other components pass data have function other callfun etc 
import React from 'react'
import {connect} from 'react-redux' 
import {Route} from 'react-router-dom'
import {fetchUser} from '../actions/fetchUser'
import Users from '../components/Users'
import UserAccount from '../components/UserAccount'
import UserForm from '../components/UserForm'


class UserContainer extends React.Component{
    componentDidMount(){
    this.props.fetchUser()
    }
    render(){
        return(
            <div>
                <Route path='/users/new' component={UserForm} />
                <Route path='/users/id' render={(routerProps) => <UserAccount {...routerProps}users={this.props.users}/>} />
                <Route exact path='/users' render={(routerProps) => <Users {...routerProps}users={this.props.users}/>} />
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        users: state.users
    }
}
export default connect(mapStateToProps, {fetchUser}) (UserContainer) 