

export const userSignupRequest = (userData) => {
    console.log("in the usersinguprequest func")
    return dispatch =>{
        console.log(userData)
        return {name:"Ivan", address: "test address"};
    }
}