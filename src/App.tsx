import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import ListToDo from './component/ListToDo';
import Footer from './component/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ListToDo />
      <ListToDo />
      <ListToDo />
      <Footer />
    </div>

  );
}

export default App;
