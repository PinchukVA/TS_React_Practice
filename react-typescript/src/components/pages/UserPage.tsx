import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';
import { IUser } from '../../types/types';
import UserList from '../userList';

const UserPage:FC = () => {

    const [users,setUsers] = useState<IUser[]>([])

  const fetchUsers = async () => {
    try{
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    }catch(e){
      console.log("ERROR - ",e)
    }
  }

  useEffect(()=>{
    fetchUsers()
  },[])


    return (
        <div className='appContainer'>
        <div className='appFlexContainer'>
          <UserList users={users}/>
        </div>
      </div>
    );
};

export default UserPage;