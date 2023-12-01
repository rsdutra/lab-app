'use client'
import { url } from 'inspector';
import { redirect } from 'next/dist/server/api-utils';
import { FormEvent, useState } from 'react'

export default function Index() {
  const [isAlertShowing,setAlertShowing] = useState(false);
  function dismissAlert(event: FormEvent<HTMLButtonElement>){
    event.preventDefault();
    setAlertShowing(false);
  }
  function Alert(){
    if(isAlertShowing){
      return(
        <div className="alert alert-danger" role="alert">
          Email or password wrong
          <button onClick={dismissAlert} type="button" className="btn-close" aria-label="Close"></button>
        </div>
      );
    }
  }
  async function onSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let json = JSON.stringify(Object.fromEntries(formData));
    fetch('/login/api',{
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: json
    }).then(data => {
      data.json().then((json)=>{
        if(json.status == "fail")
          setAlertShowing(true);
        else{
          console.log("logou");
          window.location.href = '/home';
        }
      });
      
    });
  }
  return (
      <div className='d-flex justify-content-center align-items-center'>
        <div>
          <form onSubmit={onSubmit} className='form-signin'>
            <h1>Login</h1>
            <Alert/>
            <div className="form-floating">
              <input type="email" id="login" name="login" className="form-control" placeholder="Email address"/>
              <label htmlFor='floatingInput'>Email</label>
            </div>
            <div className="form-floating">
              <input type="password" id="pwd" name="pwd" className="form-control" placeholder="Password"/>
              <label htmlFor='floatingInput'>Password</label>
            </div>
            <div className="form-floating">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
  )
}
