import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './RestaurantDetails.css'


export const RestaurantDetails=()=>{
const [resdata,setResdata]=useState([]);
const [page,setpage]=useState(1); 
const [totaldata,setTotaldata]=useState([])
const [star,setStar]=useState(null); 
const [payment,setPayment]=useState("");
const [order,setOrder]=useState("");

 useEffect(()=>{
   getdata()
 },[page])   

const getdata=()=>{
    fetch(`http://localhost:3000/Restaurants?_limit=4&_page=${page}`).then(Response=>Response.json()).then(data=>setResdata(data));
} 
useEffect(()=>{
    
        fetch('http://localhost:3000/Restaurants').then(Response=>Response.json()).then(data=>setTotaldata(data));

},[])

const Starfun=(value)=>{
     setStar(value)
     getstar()
}

const getstar=()=>{
    fetch(`http://localhost:3000/Restaurants?rating=${star}`).then(Response=>Response.json()).then(data=>setResdata(data))
} 
 
const paymentfun=(method)=>{
   setPayment(method)
   getpayment()
}
const getpayment=()=>{
    fetch(`http://localhost:3000/Restaurants?Payment_methods=${payment}`).then(Response=>Response.json()).then(data=>setResdata(data))

}

const orderfun=(sort)=>{
    setOrder(sort)
    getorder()
 }
 const getorder=()=>{
    fetch(`http://localhost:3000/Restaurants?_sort=cost_for_two&_order=${order}`).then(Response=>Response.json()).then(data=>setResdata(data))

}

return(
    <div>
    
      <div className="pagination">
      <Link to="/addrestaurant">Add Restaurant</Link>
      <button disabled={page===1} onClick={()=>{
                if(page>1){
                    setpage(page-1)
                }
            }}>Prev</button>
            <button disabled={page===Math.ceil((totaldata.length)/4)} onClick={()=>{
                    setpage(page+1)
            }}>Next</button>
      </div>
      <div className="stars">
      <button onClick={()=>{Starfun(1)}}>1 star</button>
      <button onClick={()=>{Starfun(2)}}>2 star</button>
      <button onClick={()=>{Starfun(3)}}>3 star</button>
      <button onClick={()=>{Starfun(4)}}>4 star</button>
      <button onClick={()=>{Starfun(5)}}>5 star</button>
      </div>
      <div className="method">
          <button onClick={()=>{paymentfun("cash")}}>cash</button>
          <button onClick={()=>{paymentfun("card")}}>card</button>
          <button onClick={()=>{getdata()}}>all</button>
      </div>
      <div className="order">
          <button onClick={()=>{orderfun("asc")}}>asc</button>
          <button onClick={()=>{orderfun("desc")}}>desc</button>
      </div>
        {resdata.map((elem)=>{
            return (
              <div key={elem.id}>
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