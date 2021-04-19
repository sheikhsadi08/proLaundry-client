import React, { useContext } from 'react';
import './Login.css';
import logo from '../../Images/Google_Logo.png';
import HeaderMain from '../Home/Header/HeaderMain/HeaderMain';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';



firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/admin" } };





  // google sign in
  const handleGoogleSignIn = () => {
    const goggleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(goggleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        var email = error.email;
        console.log(errorMessage, email);
      });
  };



    return (
        <div style={{width:"90%", margin: "auto"}}>
            <HeaderMain></HeaderMain>
            <div className="google-area-container">
                <div className="google-area">
                    {!loggedInUser.email && <h1>Log In With Google</h1>}
                </div>

                {!loggedInUser.email ? (
                    <div className="google-sign-in" onClick={handleGoogleSignIn}>
                        <img src={logo} alt="" />
                        <p>Continue with Google</p>
                    </div>
                ) : (
                    <h1 className="logged-in-user text-success"> User Logged In</h1>
                )}
            </div>
        </div>
    );
};

export default Login;