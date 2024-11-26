import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS =[{
        id: 'u1',
        name:'Abhinav',
        image: 'https://picsum.photos/id/237/200/300',
        places: 3
    },
    {
        id: 'u2',
        name:'Heroine',
        image: 'https://picsum.photos/id/237/200/300',
        places: 25
    }
];
    return(<UsersList items={USERS}/>);
}

export default Users;