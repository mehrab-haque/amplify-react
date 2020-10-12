import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify,{Auth} from 'aws-amplify'
import awsconfig from './aws-exports'
import {AmplifySignOut,withAuthenticator} from '@aws-amplify/ui-react'

Amplify.configure(awsconfig)

function App() {

  useEffect(()=>{
    Auth.currentUserInfo().then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut/>
        <h2>My App</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
