import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";

export default function UserList({userData =[]}) {

    const [items, setItems] = useState([
        {
            id: "1",
            name: "Max Schwarx",
            image: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1600",
            places: 3,
        },{
            id: '2',
            name: "Harun",
            image: "https://images.pexels.com/photos/863963/pexels-photo-863963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            places: 2,
        }
    ])

    useEffect(()=> {
        (userData &&  userData.length > 1 && setItems(userData))
    },[])

    console.log(items.length)


    
        return(<>
            <ul className="user-list">
            {items && items.map((user, i) => (
                <UserItem key={i} data={user} />
            ))}
            </ul>
        

  
           {items.length< 1 &&  <div className="center">
                <h2>No users found!</h2>
            </div>}
            
            </>
        ) 
    
}