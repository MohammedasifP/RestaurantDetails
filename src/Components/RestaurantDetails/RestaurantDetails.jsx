import { useEffect, useState } from "react"


export const RestaurantDetails=()=>{
const [resdata,setResdata]=useState([])    

 useEffect(()=>{
   getdata()
 },[])   

const getdata=()=>{
    fetch("http://localhost:3000/Restaurants").then(Response=>Response.json()).then(data=>setResdata(data))
} 

return(
    <div>
        {resdata.map((elem)=>{
            return (
              <div>
                  <div className="">
                    <div>
                        <div>
                        <img src={elem.img_url}/></div>
                        <div>
                            <h2>{elem.name}</h2>
                            <p>{elem.categories}</p>
                            <p>cost for two: ${elem.cost_for_two}</p>
                            <p>Min:${elem.min}-Upto 30 min</p>
                            <p>Accept:{elem.Payment_methods}</p>
                        </div>
                    </div>
                    <div>
                        <p>{elem.rating}</p>
                        <p>{elem.votes}</p>
                        <p>{elem.reviews}</p>
                    </div>
                    <hr/>
                  </div>
              </div>
            )
        })}
    </div>
)

}