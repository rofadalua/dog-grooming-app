import React from 'react';
import {connect} from 'react-redux'
import {fetchGroomer} from './actions/fetchGroomer'

class App extends React.Component{
  
  componentDidMount() {
   this.props.fetchGroomer({type: "FETCH_GROOMER", payload: {name: 'Booking'}})
  }
  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

// const mapStateToProps = () => //i want to access to this particular part of the store 

export default connect(null, {fetchGroomer})(App); 
//is calling automatically dispatch on the return value of fetch request
//store.dispatch({type:'FETCH....etc})-the fetch is in fetchgro file