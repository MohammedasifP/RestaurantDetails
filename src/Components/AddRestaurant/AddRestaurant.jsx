import { useState,useEffect} from "react";

export const AddRestaurant=()=>{
const [formdata,setFormdata]=useState({

})

const handlechange=(e)=>{
  
    const {id,value}=e.target;

    setFormdata({...formdata,[id]:value})
}

console.log(formdata)
const senddata=(e)=>{
  e.preventDefault();
  fetch("http://localhost:3000/Restaurants",{
                method:"POST",
                body:JSON.stringify(formdata),
                headers:{"content-type":"application/json"}})
                
}


 
return (
       <div id="container" onSubmit={senddata}>
         <form >
       <label>Enter Restaurant name</label>
       <input type="text" id={"name"}  onChange={handlechange}/><h6></h6>

       <label>Enter image url</label>
        <input type="text" id={"img_url"}  onChange={handlechange}/><h6></h6>

        <label>Enter categories</label>
        <input type="text" id={"categories"}  onChange={handlechange}/><h6></h6>

        <label>Enter cost_for_two</label>
        <input type="number" id={"cost_for_two"}  onChange={handlechange}/><h6></h6>
  
        
        <label>Enter minimum price</label>
        <input type="number" id={"min"}  onChange={handlechange}/><h6></h6>

        <label>Enter Payment methods</label>
        <input type="text" id={"Payment_methods"}  onChange={handlechange}/><h6></h6>

        <label>Enter rating</label>
        <input type="number" id={"rating"}  onChange={handlechange}/><h6></h6>

        <label>Enter votes</label>
        <input type="number" id={"votes"} onChange={handlechange}/><h6></h6>

        <label>Enter reviews</label>
        <input type="number" id={"reviews"}  onChange={handlechange}/><h6></h6>

        <input type="submit"/>
       </form>
        
       </div>
)


}