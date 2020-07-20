import React ,{useState,useEffect} from 'react'
import axios from 'axios'

export default function UserList() {
    const [listOfUSer,setlistOfUSer]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setlistOfUSer(res.data)) 

    })

    return (
        <div className='container1'>
            
                {listOfUSer.map(item =>(

 <div className="card text-center" key={item.id}>
    <div className="card-header" style={{backgroundColor:'gold'}}>
       <h4>{item.username}</h4> 
        </div>
<div className="card-body">
  <p className="card-text">
      <li>{item.name}</li>
      <li>{item.email}</li>
      <li>{item.phone}</li>
    
  </p>
</div>
</div>  
                ))}
            
            
        </div>
    )
}
