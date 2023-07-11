// App.jsx
import React from 'react';
import { createContext } from 'react';
import FakeNews from './components/FakeNews';
import Timer from './components/Timer/Timer';
import ContextComponent from './components/useContext/ContextComponent';

// Context 생성 
export const userContext = createContext();

// User 생성
const user = {
  name: '아기사자',
  job: '백수'
};

function App() {
  return (
    <>
			{/* <FakeNews/> */}
      <Timer/>

    </>
  );
}

export default App;