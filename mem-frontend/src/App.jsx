import './App.css'
import { FooterComponent } from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListMemberComponent from './components/ListMemberComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  MemberComponent  from './components/MemberComponent';

function App() {

  return (
    <>
  <BrowserRouter>
    <HeaderComponent />
      <Routes>
          {/* //http://localhost:3000 */}
          <Route path='/' element = {    <ListMemberComponent />}> </Route>
           {/* //http://localhost:3000/members */}
          <Route path='/members' element = {    <ListMemberComponent />}> </Route>
            {/* //http://localhost:3000/add-member */}
          <Route path='/add-member' element = {<MemberComponent />}> </Route>
            {/* //http://localhost:3000/edit-member/:id */}
          <Route path='/edit-member/:id' element = {<MemberComponent />}> </Route>
            
      </Routes>
    
    <FooterComponent />
  </BrowserRouter>
    </>
  )
}

export default App;
