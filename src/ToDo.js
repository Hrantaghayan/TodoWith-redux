import logo from './logo.svg';
import './ToDo.css';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './footer';

export function Todo() {
  // debugger
  return (
   <div className='container'>
    <div className='title'>To Do</div>
    <div className='initial-shape'>
    <Header/>
    <Body/>
    <Footer/>
    </div>
    <div className='first'></div>
   </div>
  );
}


