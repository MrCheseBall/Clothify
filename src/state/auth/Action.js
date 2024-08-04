import axios from 'axios'
import { API_BASE_URL } from '../../config/apiConfig'
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from './ActionType'

// const token=localStorage.getItem("jwt")

const registerRequest=()=>({type:REGISTER_REQUEST})
const registerSuccess=(user)=>({type:REGISTER_SUCCESS,payload:user})
const registerFailure=(error)=>({type:REGISTER_FAILURE,payload:error})

export const register=(userData)=>async(dispatch)=>{
    dispatch(registerRequest())
    try {
        // console.log(userData)

        // console.log("1")
        const responce=await axios.post(`${API_BASE_URL}/auth/signup`,userData)
        // console.log("2")
        const user=responce.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        // console.log("user ",user)
        // console.log("user jwtttttttttttttttttttttttttttttttttttttt",user.jwt)

        dispatch(registerSuccess(user.jwt))
    } catch (error) {
        dispatch(registerFailure(error.message))
    }
}


const loginRequest=()=>({type:LOGIN_REQUEST})
const loginSuccess=(user)=>({type:LOGIN_SUCCESS,payload:user})
const loginFailure=(error)=>({type:LOGIN_FAILURE,payload:error})

export const login=(userData)=>async(dispatch)=>{
    console.log("2  ")
    dispatch(loginRequest())
    try {
        console.log(userData)

        const responce=await axios.post(`${API_BASE_URL}/auth/signin`,userData)
        console.log(responce)
        const user=responce.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)    
        }
        // console.log("user ",user.jwt)
        dispatch(loginSuccess(user.jwt))

    } catch (error) {
        dispatch(loginFailure(error.message))
    }
}

const getUserRequest=()=>({type:GET_USER_REQUEST})
const getUserSuccess=(user)=>({type:GET_USER_SUCCESS,payload:user})
const getUserFailure=(error)=>({type:GET_USER_FAILURE,payload:error})

export const getUser=(jwt)=>async(dispatch)=>{
    dispatch(getUserRequest())
    try {
        // console.log(jwt)
        const responce=await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                "Authorization":`Bearer ${jwt}`
            }
        })
        // console.log("5")
        const user=responce.data;
        // console.log("user ",user)
        
        dispatch(getUserSuccess(user))
    } catch (error) {
        dispatch(getUserFailure(error.message))
    }
}

export const logout=()=>async(dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
    localStorage.clear();
}