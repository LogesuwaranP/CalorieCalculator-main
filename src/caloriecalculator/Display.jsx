import React from "react";
import { useState } from "react";
import { data } from "./data";
import Advice from  "./Advice";

import './display.css'

const Display=()=>{


    const[search,setSearch] = useState("");
    const[totalCal,setTotalCal] = useState(0);
    const[show,setShow] = useState(false);
    const[food,setFood] = useState("");
    const[foodQuantity,setFoodQuantity] = useState(1);
    const[i,setI] = useState("https://images.pexels.com/photos/5842227/pexels-photo-5842227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");

    const add=(cal,food_name,image)=>{
        setTotalCal(totalCal+cal);
        setFood(food_name);
        setI(image);
        console.log(food_name);
    }
    const addCalorie=()=>{
        
        data.map((item)=>{
            
            if(item.food_name===food)
            {
                setTotalCal(totalCal+(item.calorie * (foodQuantity-1)));
                setI(item.image);
                setFoodQuantity(1);
            }
            return 0;
            
        })
    }

    const Select=()=>{

        data.map((item)=>{
            
            if((item.food_name.toLowerCase())===search)
            {
                setTotalCal(totalCal+item.calorie);
                setFood(item.food_name);
                setI(item.image);
                setShow(false);
                setSearch("");
            }
            return 0;
            
        })


    }


    const filterlist = 

        <div className="foodlist">
                    
                    {data.filter((item)=>{
                        return search.toLowerCase()===''?item:item.food_name.toLowerCase().includes(search);
                    }).map((item)=>(
                        <ul key={item.id}>

                            <li onClick={()=>{add(item.calorie,item.food_name,item.image)}}>{item.food_name}</li>

                        </ul>
                    ))}
        </div>
    

    return(

        <div className="grid-container">

            <div className="main">
                <div className="input">
                 <input placeholder="Enter Food" onChange={(e)=>{setSearch(e.target.value);setShow(true)}}/>
                 <button onClick={Select}> Select </button>
                </div>

                <div>
                    {(show===false)?<button className="show" onClick={()=>setShow(true)}>Show All</button>:filterlist}
                </div>

                {
                  (totalCal===0)?"":
    
                    <div className="quantity">
                        <p>Enter Quantity</p>
                        <p>
                           {food} : 
                           <input id="quan" onChange={(e)=>{setFoodQuantity(e.target.value)}} /> 
                           <button onClick={addCalorie}>Add</button>
                        </p>
                        
                    </div>

                 }

            </div>

            <Advice totalCal={totalCal} i={i}/>           
            
        </div>
    )
}

export default Display; 