import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from 'react'
import { getUser, register } from '../../state/auth/Action'


const RegisterForm = () => {

    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt")
    const {auth}=useSelector(store=>store)
    const navigate=useNavigate()

    useEffect(()=>{
        if(jwt){

            dispatch(getUser(jwt))
        }
    },[jwt,auth.jwt])
    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data=new FormData(event.currentTarget)
        const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")

        }
        dispatch(register(userData))
        // console.log("auth.user",auth.user)
        console.log("userData-----------",userData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name='firstName'
                            label='First Name'
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name='lastName'
                            label='Last Name'
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name='email'
                            label='Email'
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name='password'
                            label='Password'
                            fullWidth
                            autoComplete='password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <button
                            type="submit"
                            className=" flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            REGISTER
                        </button>
                    </Grid>
                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                <p>if you have already account ?</p>
                <Button onClick={()=>navigate("/login")}
                    className='ml-5'size='small'
                    >Login</Button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
