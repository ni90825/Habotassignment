import './App.css';
import  Header  from './Components/header'; 
import Homemainsection from "./Components/homemainsection"
import {Secondmainsection} from "./Components/secondsection";
import Footer from './Components/footer';
function App() {
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
