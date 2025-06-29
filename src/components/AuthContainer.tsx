import { useState } from "react";
import LoginScreen from "./LoginScreen";
import RegistrationForm from "./RegistrationForm";
import SuccessScreen from "./SuccessScreen";
import ProductItemsList from "./ProductItemsList";



export type AuthStep='login'|'register'|'success';

interface User{
  name:string,
  mobileNumber:string,
  email:string
}


const AuthContainer =()=>{
  const[currentStep,setCurrentStep] =useState<AuthStep>('login');
  const[currentUser,setCurrentUser] =useState<User|null>(null);

  const handleRegister=(userData:User)=>{
    setCurrentUser(userData);
    setCurrentStep("success")

  }
  const handleBackLogin=()=>{
    setCurrentStep("login");
    setCurrentUser(null)
  }
  const handleSignUp=()=>{
    setCurrentStep("register")
  }
  const handleSignUser=(mobileNumber:string) =>{

    const  users = JSON.parse(localStorage.getItem("users")||"[]");
    const user = users.find((u:User)=>u.mobileNumber===mobileNumber)

    if(user){
      setCurrentUser(user);
      setCurrentStep("success")
    }
    else{
      setCurrentStep("register")
    }

  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center" >
        {currentStep==="login" &&
        (
          <LoginScreen 
          onSignUp={handleSignUp}
          onSignIn={handleSignUser}
          />
        )
        } 
        {
          currentStep==="register" && (
            <RegistrationForm 
            onSuccess= {handleRegister}
            onBack={handleBackLogin}
            
            
            />
          )
        }
         {
          currentStep==="success"&&(
            // <SuccessScreen 
            // userData={currentUser}

            // onBack={handleBackLogin}
            
            
            // />
            <ProductItemsList
             loginUser={currentUser}
             handleBackLogin={handleBackLogin}
            
            />
          )
        } 


    </div>
  )

}
export default AuthContainer