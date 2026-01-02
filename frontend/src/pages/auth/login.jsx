import { LoginFormControls } from '../../config/config'
import CommonForm from '../../components/common/form'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '@/store/authSlice/authSlice'
import { toast } from "sonner"


const initialState = {
  email : '',
  passowrd : ''
}


const Authlogin = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  function onSubmit(event){
      event.preventDefault();
      dispatch(loginUser(formData)).then(data => {
        if(data?.payload?.success) {
            toast('Login Succesfully')
        }else if(!data?.payload?.success){
          toast('Invalid credentials please try again!')
        }
      })
  }


  return (
      <div className='mx-auto w-ful max-w-md space-y-6'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-foreground mb-7'>Sign in to your acccount</h1>
        <CommonForm
          formControls={LoginFormControls}
          buttonText={'Sign Up'}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
          <p className='mt-7'>Don't have an account &nbsp;  
              <Link className='font-medium text-primary hover:underline' to='/auth/register'>Regiseter</Link>
          </p>
        </div>
      </div>
  )
}

export default Authlogin