import React  from 'react';
import Card, {CardVariant} from './components/card';
import './app.css'
import ToDoPage from './components/pages/ToDoPage copy';
import UserPage from './components/pages/UserPage';
import UserSinglePage from './components/pages/UserSinglePage'
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div>
          <div className='appContainer'>
            <div className='appFlexContainer'>
              <Card 
                variant={CardVariant.primary} 
                width='110px' 
                height='70px'
              >
                <button className='appButtton'><Link to="/users">Users</Link></button>
              </Card>
              <Card 
                variant={CardVariant.outlined}  
                width='110px' 
                height='70px'
              >
                <button className='appButtton'><Link to="/todos">Todos</Link></button>
              </Card>
            </div>
          </div>
        </div>
        <Routes>
              <Route path="/users" element={<UserPage/>}/>
              <Route path="/todos" element={<ToDoPage/>}/>
              <Route path="/users/:id" element={<UserSinglePage/>}/>
              <Route path="*" element={<div>NotFound</div>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;