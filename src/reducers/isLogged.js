const isLogged = ( state = false, action ) => {
    switch(action.type){
        case "SIGNIN" : 
            return !state;
        case "SIGNOUT" : 
            return false;
        default : 
            return state;
    }
}

export default isLogged;