import { History, LogOut, ShieldAlert, ShoppingCart } from "lucide-react";
import UseFetch from "../Hooks/UseFetch"
import type { Product, User } from "../DataTypes/Product";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";


 interface ProductListProps{
  loginUser:User|null,
  handleBackLogin:()=>void
 }



function ProductItemsList({loginUser,handleBackLogin}:ProductListProps) {

  const {data,loading,error} =UseFetch('https://fakestoreapi.com/products');

  if(loading){
return(
    <div className="flex justify-center items-center ">
<div className="w-15 h-15 border-2 border-green-500 border-t-transparent rounded-full  animate-spin "></div>
    </div>)
  }
  if(error){
    return(
      <div className="flex items-center justify-center bg-orange-100 border-none rounded-md p-4 ">
        <span className="text-red-600 font-bold">
          {error ?  (error instanceof Error ?<span className="flex gap-2"><ShieldAlert className='w-5 h-5' /> {error.message}</span> : String(error)) : ""}
        </span>
      </div>
    )
  }
  if(!data){

  }

  return (
    <div className="min-h-screen p-4  ">
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white/80 shadow-lg p-6 rounded-lg backdrop:blur-sm">
<div className="flex justify-between items-center">
  <div className="gap-2">
    <h1 className="text-2xl font-bold text-gray-800">welcome, {loginUser?.name}!</h1>
    <p className="text-gray-600">Exploring our Amazing Products</p>
  </div>
  <div className="flex justify-center space-x-2">
    <Button
    variant="outline"
    className="flex items-center space-x-2 cursor-pointer"
    >
      <History className="w-4 h-4"/>
     <span>Order History</span> 
    </Button>
    <Button
     variant={"outline"}
     className="flex items-center space-x-2 cursor-pointer"
    >
      <ShoppingCart className="w-4 h-4"/>
      Cart
    </Button>
    <Button
    variant={"outline"}
    className="flex items-center space-2 cursor-pointer"
    onClick={handleBackLogin}
    >
      <LogOut className="text-red-500 w-4 h-4" />
      <span className="text-red-500 font-medium">Logout</span>
    </Button>

  </div>

</div>
        </div>

      </div>


      <div className="max-w-6xl mx-auto">
   <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {data?.map((product:Product)=>(
      <li key={product.id} className="shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white/80 p-6 rounded-md ">
        <ProductCard product={product}/>
       
     </li>
    ))  }
    
   </ul>

      </div>

      
    </div>
  )
}

export default ProductItemsList
