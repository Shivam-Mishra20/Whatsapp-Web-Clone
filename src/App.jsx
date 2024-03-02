

import './App.css'
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar'
import MessageComponent from './components/MessageComponent';
import LoadingScreen from './components/LoadingScreen';

const Container = styled.div`
display : flex;
 

flex-direction: row;
 max-height: 94vh;
 height: 100%;
width: 100%;
 
background: #E2E1DE;
@media (max-width: 697px) {
     flex-direction: column;
      width: auto;
     margin: 0 auto;
     max-height: 100vh;
     overflow-y: scroll;
      
  }
  
`;
function App() {


  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      if (progress >= 100) setLoading(false);
      else {
        const increment = Math.floor(Math.random() * (10 + 1)) + 7;
        setProgress(progress + increment);
      }
    }, 300);

    return () => clearTimeout(id);
  }, [progress]);

  return (
    <>


      {loading ? <LoadingScreen progress={progress} /> : (

        <>

          <div className='  h-[155px]  bg-[#00A884]  min-w-[100vw]   w-100   '>
            <div className=' px-[24px] pt-[16px]       h-screen     '>
              <Container className='' >
                <Sidebar />
                <MessageComponent />
              </Container>


            </div>






          </div>
        </>

      )}

    </>
  );

}

export default App;
