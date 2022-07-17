import { useState } from 'react'

import { Home } from "./Home/index.jsx";
import { Login } from "./Login/index.jsx";
import { SignUp } from "./SignUp/index.jsx";

export function App(){
  const [user, setUser] = useState();

  if (user){
    return <Home />
  }

  return window.location.pathname ==='/signup'
    ?  <SignUp signInUser = {setUser} />
    : <Login signInUser={setUser}/>
}