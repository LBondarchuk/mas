import { useState } from 'react';
import './App.css';
import { CallUs } from './components/CallUs';
import { Header } from './components/Header';
import { PopUp } from './components/PopUp';
import { Form } from './components/form/Form';
import { HomePage } from './pages/HomePage';
import React from 'react';

type  defaultContext  =  {
  showPopUp: boolean,
  setShowPopUp: (bol: boolean) => void
}

const def = {
  showPopUp: false,
  setShowPopUp: (bol: boolean) => {}
}


export const MyContext = React.createContext<defaultContext>(def);


function App() {

 
  const [showPopUp, setShowPopUp] = useState(false)
  return (
    <MyContext.Provider value={{showPopUp, setShowPopUp}}>
      <Header />
      <CallUs />
      <PopUp>
        <Form>
          <input type="text" className="form__input" placeholder="Ім'я" required/>
          <input type="number" className="form__input" placeholder="Телефон" required/>
          <input type="eamil" className="form__input" placeholder="Email"/>
         <textarea
        className="form__input"
        cols={30} 
        rows={10} 
        placeholder="Коментар"></textarea>
        </Form>
      </PopUp>
      <HomePage />
    </MyContext.Provider>
  );
}

export default App;
