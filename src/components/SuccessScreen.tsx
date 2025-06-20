import { ArrowLeft, CheckCircle, Mail, Phone, User } from "lucide-react"
import { Button } from "./ui/button"


interface User {
  name:string,
  mobileNumber:string,
  email:string
}
interface  SuccessScreenProps{
  onBack: ()=>void,
  userData:User|null 
  
}

function SuccessScreen({onBack,userData}:SuccessScreenProps) {
  return (
    <div className="w-full shadow-2xl border-0 bg-white/80 backdrop-blur-sm rounded-md p-6 m-6">
      <div className="text-center pb-6">
    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6 shadow-lg animate-pulse">
      <CheckCircle className="w-10 h-10 text-white"/>
    </div>
    <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Welcome!</h1>
    <p className="text-gray-600 text-lg mt-2"> You have Successfully signed in</p>
      </div>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Your details</h3>
        <div className="flex items-center space-x-3">
  
    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
      <User className="h-5 w-5 text-blue-600" />
    </div>
    <div>
      <p className="text-sm text-gray-500">Full Name</p>
      <p className="font-semibold text-gray-800">{userData?.name}</p>
    </div>
</div>
<div className="flex items-center space-x-3">
  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center ">
    <Phone className="w-5 h-5 text-purple-600 "/>
  </div> 
  <div>
    <p className="text-sm text-gray-500">Mobile Number</p>
    <p className="font-semibold text-gray-800">{userData?.mobileNumber}</p>
  </div>
</div>
<div className="flex item-center space-x-3">
  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
    <Mail className="h-5 w-5 text-green-600"/>
  </div>
  <div> <p className="text-sm text-gray-500">Email</p>
  <p className="font-semibold text-gray-800">{userData?.email}</p></div>

</div>
      </div>
       <div className="text-center space-y-4 mt-4 ">
      <div className=" bg-green-50 rounded-md border  border-green-200 p-4">
        <p className="text-green-800 font-medium">🎉 Your account is ready to use!</p>
        <p className="text-green-600 text-sm mt-1">You can now access all features of the application.</p>
      </div>
      <Button
      variant={"outline"}
      onClick={onBack}
            className="cursor-pointer w-full h-12 border-2 border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 font-semibold rounded-lg transition-all duration-200" >
            <ArrowLeft/>
        Back to Login
      </Button>
      </div>
    </div>
  )
}

export default SuccessScreen
