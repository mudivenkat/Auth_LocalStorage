import { Phone, UserPlus } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useState } from 'react'


interface LoginScreenProps{
  onSignUp:()=>void,
  onSignIn:(mobileNumber:string) =>void
   

}



function LoginScreen({onSignUp,onSignIn}:LoginScreenProps) {
  const[mobileNumber,setMobileNumber]=useState('');
  const[loading,setLoading]=useState(false);




  const handleSignIn=()=>{
    
    onSignIn(mobileNumber)
  }
  return (
    <div className='w-full border-0 bg-white/80  shadow-2xl p-6 backdrop:blur-sm rounded-md pb-6'>
      <div className='text-center pb-6 '>
        <div className='mx-auto bg-gradient-to-r from-blue-500  to-blue-700 w-18 h-18 rounded-full flex items-center justify-center shadow-lg '>
      <Phone className='w-8 h-8 text-white'/>
        </div>
        <h1 className='text-2xl font-bold bg-gradient-to-b from-blue-500 to-pink-600 bg-clip-text text-transparent'>Welcome Back </h1>
        <p className='text-gray-600 mt-2'>
        Enter your mobile number to continue
        </p>
      </div>
      <div className='space-y-2'>
      <div className='space-y-2'>
        <label htmlFor="mobile" className='text-gray-700 font-medium  text-sm mb-3'>
          
Mobile Number        
  </label>
          <Input
          id='mobile'
          type='tel'
          placeholder='Enter Your Mobile'
          value={mobileNumber}
          onChange={(e)=>setMobileNumber(e.target.value)}
          className='h-12 text-lg border-2 border-gray-200 focus:border-blue-500 transition-colors'
          maxLength={10}
          />
          </div>
          <div className='space-y-3 pt-4'>
            <Button
            onClick={handleSignIn}
            className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            > Sign In
            </Button>
            <Button
            onClick={onSignUp}
            className=" cursor-pointer w-full h-12 border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 font-semibold rounded-lg transition-all duration-200" >
              <UserPlus className='w-5 h-5 mr-2'/>
            Create New Account
            </Button>
          </div>
          <div className='text-center pt-4'>
          <p className='text-xs text-gray-500'>By continuing, you agree to our Terms of Service and Privacy Policy</p> 
          </div>
      </div>
   </div>
  )
}

export default LoginScreen
