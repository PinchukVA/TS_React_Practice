import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';
import { IToDO } from '../../types/types';
import ToDoList from '../TodoList';

const ToDoPage:FC = () => {

  const [todos,setTodos] = useState<IToDO[]>([])

  const fetchTodos = async () => {
    try{
      const response = await axios.get<IToDO[]>('  https://jsonplaceholder.typicode.com/todos')
      setTodos(response.data)
    }catch(e){
      console.log("ERROR - ",e)
    }
  }

  useEffect(()=>{
    fetchTodos()
  },[])


    return (
      <div className='appContainer'>
        <div className='appFlexContainer'>
          <ToDoList todos={todos}/>
        </div>
      </div>
    );
};

export default ToDoPage;