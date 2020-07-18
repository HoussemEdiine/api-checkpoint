import React ,{useState,useEffect} from 'react'
import axios from 'axios'

export default function UserList() {
    const [listOfUSer,setlistOfUSer]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setlistOfUSer(res.data)) 

    })

    return (
        <div>
            
                {listOfUSer.map(item =>(
                <li key={item.id}>{item.username}</li>
                
                ))}
            
            
        </div>
    )
}
