import React,{useState} from "react";
import './Advice.css'
const Advice =(props)=>{

    const [weight,setWeight] = useState(0);
    const [maintain,setMaintain] =useState(0);
    const [message,setMessage] =useState("Try to have Good&Healthy Food and Workout Everyday")
    
    const handleChange=(e)=>{

        setWeight(e.target.value);   
        setMaintain(e.target.value*27) 
        console.log(weight);
            if(e.target.value==='')
            {
                setWeight(0);
                setMessage("Try to have Good&Healthy Food and Workout Everyday")
                
            }
            else if((props.totalCal<=((e.target.value*27)+100))&&(props.totalCal>=((e.target.value*27)-100)))
            {
                setMessage(<p id="msg3">Your have Maintained your Average calorie Level </p> )
                console.log(props.totalCal+"--1--"+maintain);               
            }
            else if(props.totalCal>((e.target.value*27)+150))
            {
                setMessage(<p id="msg2">Your calorie Level is More then Maintanence calorie Level</p>)
                console.log(props.totalCal+"--2--"+maintain);
            }
            else
            {
                setMessage( <p id="msg1">Your calorie Level is Less then Maintanence calorie Level</p>)
                console.log(props.totalCal+"--3--"+maintain);
            }
    }

    
    return(

        <div className="grid-container">

            <div className="main">

                <div className="input1">

                    <input placeholder="Enter Your Weight" onChange={handleChange}/>
                    <h5 >Weight {weight}</h5>

                </div>

                <div className="image">
                    <img className="i" src={props.i}  />
                </div>

                <div className="calorie">
                    <h4>You Consumed <b>{props.totalCal}</b> calories</h4>                    
                </div>

                <div className="maintanence">
                    <h5>Maintanence calorie for {weight} is {maintain}</h5>
                </div>

                <div className="msg">
                    {message}
                </div>

                
            </div>       


        </div>
    )
}

export default Advice;