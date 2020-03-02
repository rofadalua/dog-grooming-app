//we pass state as first argument, then action object
//we need default returns something back 
//return.action.payload- this is to check the action is working and if reducer can get updated

export default function userReducer(state = {users: []}, action ) {
    
    switch(action.type){
        case 'FETCH_USER':
            return{users: action.payload}    // new redux state, 
        case 'ADD_USER':                        
            return {...state, users: [...state.users, action.payload]}   
        default:
            return state  
    }
}
