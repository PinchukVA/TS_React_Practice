import React, {FC} from 'react';
import { IUser } from '../types/types';
import { useNavigate } from 'react-router-dom';
interface IUserProps {
    user: IUser | null
}

const User: FC<IUserProps > = ({user}) => {
    const navigate = useNavigate();
    if (user !== null){ return (
        <div onClick={()=>navigate(`/users/${user.id}`)} className='appUserDiv'>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>Address:</p>
            <p>{`${user.address.city} - ${user.address.street} - ${user.address.zipcode}`}</p>
        </div>
    ) }else return (<></>)
};

export default User;