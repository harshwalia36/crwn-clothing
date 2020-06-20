const INITIAL_STATE= {
    currentUser:null
}

const userReducer = (state=INITIAL_STATE,action) =>{   // (state=INITIAL_STATE) A way in ES6 JS to provide default value to state if state is undefined.
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser:action.payload
            }
            default:
                return state;     //if none of the case matches then we return the current state.
    }

}

export default userReducer;