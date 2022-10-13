import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {

  const [user, setUser] = useState({})

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(e => {
        console.error(e);
      })
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(() => {
        setUser({})
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div>
      {user.uid
        ?
        <button onClick={handleGoogleSignOut}>Sing Out</button>
        :
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </>
      }
      {user.uid &&
        <div>
          <br />
          <h2>User Name : {user.displayName}</h2>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>}
    </div>
  );
}

export default App;
