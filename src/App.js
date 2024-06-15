import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './home/home';
import Login from './login/login';
import Account from './account/account';
import Checkout from './checkout/checkout';
import Menu from './shared/menu';
import Adicionaproduto from './adicionaprod/Adicionaproduto';

function App() {
  return (
    <>
    <Menu></Menu>
    <Routes>
    <Route element = { <Home/> }  path="/home" />
    <Route element = { <Login/> }  path="/login" />
    <Route element = { <Account/>  }  path="/account" />
    <Route element = { <Checkout/>  }  path="/checkout" />
    <Route element = { <Menu/>  }  path="/menu" />
    <Route element = { <Adicionaproduto/>  }  path="/adicionaprod" />


</Routes></>
)
  
}

export default App;
