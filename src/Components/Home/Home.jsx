import './Home.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from "../Navbar/Navbar"

const Cart = () => {


  const [name, setName] = useState("Alper");
  const [surname, setSurname] = useState("Ertugrul");
  const [age, setAge] = useState(18);
  const [img, setimg] = useState("");

  const [name2, setName2] = useState("Alper");
  const [surname2, setSurname2] = useState("Ertugrul");
  const [age2, setAge2] = useState(18);
  const [img2, setimg2] = useState("");

  const [money, setMoney] = useState(0);

  function GetUser(){
   
    axios.get("https://randomuser.me/api/").then((response) => {
      const datas = response.data.results;
      datas.map((user) =>{
        setName(user.name.first);
        setSurname(user.name.last);
        setAge(user.dob.age);  
        setimg(user.picture.large)
        
        const rand = Math.random();
        if(rand > 0.7){
          setName2(user.name.first);
          setSurname2(user.name.last);
          setAge2(user.dob.age);
          setimg2(user.picture.large)
        }
         else
         { 
          axios.get("https://randomuser.me/api/").then((response) => {
            const datas = response.data.results;
            datas.map((user) =>{
              setName2(user.name.first);
              setSurname2(user.name.last);
              setAge2(user.dob.age);  
              setimg2(user.picture.large)
             })
           })
         }
       })
       
     })
     

  
  }
  useEffect(() =>{
    GetUser();
  },[]);
  return (
  <>
    <Navbar money ={money}/>
    
    <div className="carts"> 
    <div className='CartName'>Passaport
      <div className="container pasaport">
        <div className="img-container"><img src={img} alt="" className='pasaport-img'/></div>
        <div className="pasaport-info">
          <div className='p-info name'>{name}</div>
          <div className='p-info surname'>{surname}</div>
          <div className='p-info age'>{age}</div>
        </div>
      </div>
    </div>

    <div className='CartName'>Id Cart
      <div className="container id">
        <div className="img-container"><img src={img2} alt="" className='pasaport-img'/></div>
        <div className="pasaport-info">
          <div className='p-info name'>{name2}</div>
          <div className='p-info surname'>{surname2}</div>
          <div className='p-info age'>{age2}</div>
        </div>
      </div>
      </div>  
       
    </div>
    
    
    <div className='btns-container'>
        <div className="btn accept" onClick={() =>{

            GetUser()

              if(name === name2){
                setMoney(money + 25);
              }
              else{
                setMoney(money - 25);
              }
             
        }}>
            <div className="btn-text">Approve</div>
        </div>
        <div className="btn reject" onClick={() =>{

           GetUser();
           if(name !== name2){
            setMoney(money + 25);
           }
            else{
              setMoney(money - 25);
            }
 
}}>
            <div className="btn-text">Reject</div>
        </div>
    </div>
    </>
  )
}

export default Cart