import { useEffect, useState } from "react"
import './RestaurantDetails.css'


export const RestaurantDetails=()=>{
const [resdata,setResdata]=useState([]);
const [page,setpage]=useState(1);    

 useEffect(()=>{
   getdata()
 },[page])   

const getdata=()=>{
    fetch(`http://localhost:3000/Restaurants?_limit=5&_page=${page}`).then(Response=>Response.json()).then(data=>setResdata(data))
} 

return(
    <div>
      <div className="pagination">
      <button onClick={()=>{setpage(1)}}>1</button>
      <button onClick={()=>{setpage(2)}}>2</button>
      <button onClick={()=>{setpage(3)}}>3</button>
      <button onClick={()=>{setpage(4)}}>4</button>
      </div>
        {resdata.map((elem)=>{
            return (
              <div>
                  <div className="flex1">
                    <div className="flex2">
                        <div className="flex2_div1">
                        <img src={elem.img_url}/></div>
                        <div className="flex2_div2">
                            <h2>{elem.name}</h2>
                            <p>{elem.categories}</p>
                            <p>cost for two: ${elem.cost_for_two}</p>
                            <p>Min:${elem.min}-Upto 30 min</p>
                            <p>Accept:{elem.Payment_methods}</p>
                        </div>
                    </div>
                    <div>
                        <p>{elem.rating}:rating</p>
                        <p>{elem.votes}:votes</p>
                        <p>{elem.reviews}:reviews</p>
                    </div>
                 </div>
                 <hr/>
              </div>
            )
        })}
    </div>
)

}