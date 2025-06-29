import { ShoppingBasket } from "lucide-react"
import type { Product } from "../DataTypes/Product"
import { Button } from "./ui/button"


interface ProductCardProps{
  product:Product
}



function ProductCard({product}:ProductCardProps) {

  return (
      <div className=" flex flex-col justify-center items-center gap-2">
       <img src={product.image} alt="image" className="object-fill w-40 h-40 rounded-2xl shadow-2xl "/>
       <div className="text-center">
       <p className="font-bold text-gray-800 tex-xl ">{product.title.substring(0,30)}</p>
       <span className="text-gray-600">{product.description.substring(0,30)}</span>
       </div>
       <Button
        className="flex gap-2 bg-blue-500 cursor-pointer text-white hover:bg-blue-800" 
       >
        <ShoppingBasket className="text-white w-5 h-5"/>
        Add to Cart
       </Button>
       </div>
      
  )
}

export default ProductCard
