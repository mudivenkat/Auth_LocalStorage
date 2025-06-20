import { ArrowLeft, Phone, Save, User } from "lucide-react"
import { Input } from "./ui/input"
import { useState } from "react"
import { Button } from "./ui/button"

interface User{
  name:string,
  mobileNumber:string,
  email:string
}

interface RegistrationProps{
 onSuccess:(userData:User)=>void,
 onBack:()=>void
}


const  RegistrationForm=({onSuccess,onBack}:RegistrationProps)=> {
  const[formData,setFormData]=useState<User>({
    name:"",
    mobileNumber:"",
    email:""
  })
  const [errors, setErrors] = useState<Record<string, string>>({});
const[isLoading,setIsLoading] =useState(false);

  const handleInputChange=(field:string,value:string)=>{
     setFormData((prev)=>({...prev,[field]:value}));
  }
  const handleSave= async ()=>{
    setIsLoading(true);
    try{
       await new Promise(resolve=>{
         return  setTimeout(resolve,1000)
       });
       const users = JSON.parse(localStorage.getItem('users')||"[]");
      //  const data= JSON.parse(sessionStorage.getItem("users")||"[]")
       const newUser={...formData};
       users.push(newUser);
       localStorage.setItem("users",JSON.stringify(users));
      //  sessionStorage.setItem("users",JSON.stringify(users))
       console.log("SuccessFully User saved in LocalStorageSystem");
         onSuccess(newUser)
        //  console.log(data,"session storage")
    }
    catch(err){
      console.log(err)

    }
    finally{
      setIsLoading(false)
    }
    // onSuccess(formData)

  }
  return (
    <div className="w-full border-0 shadow-2xl bg-white/80 backdrop-blur-sm rounded-md p-6 ">
     <div className="text-center pb-6">
       <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
        <User className="w-8 h-8 text-white"/>
        </div>
     <p className="text-2xl font-bold bg-gradient-to-r  from-purple-600 to-pink-600 bg-clip-text text-transparent ">Create Account</p>
     <p className="text-gray-600 mt-2">Fill in your details to get started</p>
     </div>
     <div className="mt-2">
      <div className="space-y-2">
        <label htmlFor="name" className="flex items-center font-medium text-sm text-gray-700">
          <User className="w-4 h-4 mr-2 text-gray-500"/>
          Full Name
        </label>
        <Input
        id="name"
        type="text"
        placeholder="Enter your full name"
        value={formData.name}
      onChange={(e)=>handleInputChange('name',e.target.value)}
      className={`h-12 text-lg border-2 transition-colors ${false?'border-red-300 focus:border-red-500':'border-gray-200 focus:border-purple-500'}`}  
        />
       <p className="text-sm text-red-500">Error</p>
      </div>
      <div className="space-y-2">
      <label htmlFor="mobile" className="flex items-center text-sm font-medium text-gray-700">
      <Phone className="w-4 h-4 mr-2 text-gray-500"/>
       Mobile Number
        </label>
        <Input
        id="mobileNumber"
        placeholder="Enter your number"
        type="tel"
        value={formData.mobileNumber}
        onChange={(e)=>handleInputChange("mobileNumber",e.target.value)}
        className={`h-12 text-lg border-2 transition-colors ${
          false ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
        }`}
        maxLength={10}
        />
         {true && <p className="text-red-500 text-sm">mobileError</p>}
      </div>
      <div className="space-y-2">
       <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
        Email Address
       </label>
       <Input
       id="email"
       type="email"
       value={formData.email}
       onChange={(e)=>handleInputChange("email",e.target.value)}
       placeholder="Enter your email address"
       className={`h-12 text-lg border-2 transition-colors ${
       false ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
      }`}       
       />
       {true && <p className="text-red-500 text-sm">email error</p>}
      </div>
     </div>

    {/* Button Added  */}
     <div className="space-y-3 pt-4">
    <Button 
    onClick={handleSave}
    className="w-full h-12 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 "
    >
   {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 rounded-full border-t-transparent animate-spin border-white"></div>
              <span>Creating Account ....</span>
            </div>
            ) : (
              <>
                <Save className="w-5 h-5 mr-2" />
                Create Account
              </>
            )}
      </Button>
    <Button
    onClick={onBack}
    variant="outline"
    className="w-full h-12 border-2 border-gray-200 text-gray-600 hover:bg-gray-50  hover:border-gray-300  font-semibold rounded-lg transition-all duration-200"
    >
  <ArrowLeft className="w-5 h-5 mr-2"/>
  Back to Login
</Button>
     </div>
    </div>
  )
}

export default RegistrationForm
