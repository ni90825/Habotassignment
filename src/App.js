import './App.css';
import { useEffect } from 'react';
import  Header  from './Components/header'; 
import Homemainsection from "./Components/homemainsection"
import {Secondmainsection} from "./Components/secondsection";
import Footer from './Components/footer';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  
  return (
    <>
  <div className='h-screen'>
<Header></Header>
<Homemainsection></Homemainsection>
<Secondmainsection></Secondmainsection>
<Footer></Footer>
</div>
    </>
  );
}

export default App;
