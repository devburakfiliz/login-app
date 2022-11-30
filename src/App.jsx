import Input from './components/input/Input';
import './App.css';
import Button from './components/button/Button';
import Form from './components/form/Form';
import { useState } from 'react';

function App() {

  const[user,setUser]=useState({name: "",password: ""});
  const handleChange=(e)=>{
    if(e.target.type==="text")
    {
      setUser({...user, name:e.target.value});
      console.log(user)
    }
    else if(e.target.type==="password")
    {
      setUser({...user, password:e.target.value});
    console.log(user)
    }
    
  }


  const handleClick = ()=>{
    if (user.name==="") {
    alert("kullanıcı adı boş geçilemez...");
  }
  
    else if(user.password==="")
    {alert("şifre boş geçilemez");}
  
    else {
      alert("Kullanıcı adı :"+user.name+" "+"Parolanız: "+user.password);
    }
  };
  return (
    <div className="App">
      <h2>Giriş Formu</h2>
      <Form>
        <Input type={"text"} placeHolder={"Kullanıcı Adı"} onChange={handleChange} value={user.name}/>
        <Input type={"password"} placeHolder={"Şifre"} onChange={handleChange} value={user.passwords}/>
        <Button onClick={handleClick}/>
      </Form>
    </div>
  );
}

export default App;
