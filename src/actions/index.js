export const increment = num =>{
    return {
        type:"INCREMENT",
        payload : num
    }
}

export const decrement = () => {
    return {
        type : "DECREMENT"
    }
}

export const signin = () => {
    return{
        type : "SIGNIN"
    }
}

export const signout = () => {
    return{
        type : "SIGNOUT"
    }
}