import React , {FC,useState,useEffect} from 'react';
import axios from 'axios';
import { IUser } from '../../types/types';
import { useParams } from 'react-router-dom';
import User from '../user';
const UserSinglePage: FC = () => {

    const [user,setUser] = useState<IUser | null>(null)
    let { id } = useParams()
    const fetchUsers = async () => {
      try{
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id)
        setUser(response.data)
      }catch(e){
        console.log("ERROR - ",e)
      }
    }
  
    useEffect(()=>{
      fetchUsers()
    },[])

    
    return (
        <div>
             <User user={user} />   
        </div>
    );
};

export default UserSinglePage;