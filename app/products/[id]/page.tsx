import { promises } from "dns";

export default async function Product({
    params,} 
    : { 
        params: Promise <{id: string}>; } ) {
     const {id} =await params;
    return(
        <div>Product {id}</div>
    )
}