import React, {useState} from 'react';
import './App.css';
import InputSortener from "./InputSortener";
import BackgroundAnimate from "./BackgroundAnimate";
import LinkResult from "./LinkResult";

function App() {
    const [inputValue, setInputValue] = useState('');

  return (
      <div className='container'>
        <InputSortener setInputValue={setInputValue}/>
          <BackgroundAnimate />
          <LinkResult inputValue={inputValue} />
      </div>
      )
}

export default App;
