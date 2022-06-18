import axios from 'axios';
import React from 'react'
import "./Assign.css";
// import InfoPage from './InfoPage';
import { useEffect,useState } from 'react'


function Assign() {
const [info, setinfo] = useState([]);
let [count, setCount] = useState(1);
const [singleUser, setsingleUser] = useState({});
const [user, setuser] = useState("");




useEffect(()=>{
  let userUrl = `https://reqres.in/api/users/${singleUser}`;
   axios.get(userUrl).then((response)=>{
    setuser(response.data.data);
    console.log(response.data.data);
   }).catch("error came");
 },[])


 
   useEffect(()=>{
    let url = `https://reqres.in/api/users?page=${count}`;
    
     axios.get(url).then((res)=>{
      setinfo(res.data.data);
      // console.log(res.data.data);
     }).catch("error came");
   },[])


    
   
  return (
   <>
 
      <div className="container">
      <div className="userInfo">
         <div className="avtar"></div>
         <img src= {user.avatar} alt=""  />
         <div className="id">{user.id}</div>
         <div className="first_name">{user.first_name}</div>
         <div className="last_name">{user.last_name} </div>
         <div className="email">{user.email} </div>
      </div>
      
        </div>
        
{/* <div className="container">
      <div className="userInfo">
         <div className="avtar"></div>
         <img src="#"  alt=""  />
         <div className="id">id</div>
         <h1>User Info</h1>
         <div className="first_name">val.first_name</div>
         <div className="last_name">val.last_name </div>
         <div className="email">val.email </div>
      </div>
      
        </div> */}

  <div className="allbtn">
  {info.map((val)=>{
    return(
      <>
         <button className='btn' onClick={()=>{setsingleUser(val.id)}}> {val.id} </button>
        {/* <button className='btn' > {val.id} </button>
       {setsingleUser(val.id)} */}
      </>
      
    )
  })}
  
  
  
  <button className='btn' onClick={()=> {setCount(2)} } >More </button>
  </div>
  
   </>
  )
}
export default Assign