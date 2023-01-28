import React, {FC} from 'react';
import {IUser} from '../types/types'
import Card, {CardVariant} from './card';
import User from './user'

interface IUserListProps {
    users: IUser[]
}

const UserList:FC<IUserListProps> = ({users}) => {
    return (
        <div className='appUsersListContainer'>
            {users.map(user=>
                <Card key={user.id} width='250px' height='300px' variant={CardVariant.primary}>
                    <User user={user} />
                </Card>
            )}
        </div>
    );
};

export default UserList;