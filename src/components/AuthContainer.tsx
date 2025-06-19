import { useState } from "react";
import LoginScreen from "./LoginScreen";
import RegistrationForm from "./RegistrationForm";
import SuccessScreen from "./SuccessScreen";



export type AuthStep='login'|'register'|'success';

interface User{
  name:string,
  mobileNumber:string,
  email:string
}


const AuthContainer =()=>{
  const[currentStep,setCurrentStep] =useState<AuthStep>('login');
  const[currentUser,setCurrentUser] =useState<User|null>(null);

  interface User{

  }
  return (
    <div className=" min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center" >
      <div className="w-full max-w-md">
        {currentStep==="login" &&
        (
          <LoginScreen/>
        )
        }
        {
          true && (
            <RegistrationForm/>
          )
        }
        {
          currentStep==="success" &&(
            <SuccessScreen/>
          )
        }

      </div>

    </div>
  )

}
export default AuthContainer