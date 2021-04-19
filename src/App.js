import React, { createContext, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NoMatch from "./Components/NoMatch/NoMatch";
import Login from "./Components/Login/Login";
import OrderedList from "./Components/Admin/OrderedList/OrderedList";
import AddService from "./Components/Admin/AddService/AddService";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Book from "./Components/Admin/Book/Book";
import AddReview from "./Components/Admin/AddReview/AddReview";


export const UserContext = createContext();


function App() {
   const [loggedInUser, setLoggedInUser] = useState({});
   const [bookedData, setBookedData] = useState({});


  return (
   <UserContext.Provider value = {[loggedInUser, setLoggedInUser,bookedData, setBookedData]}>
    <Router>
       <Switch>
         <Route path="/home">
            <Home></Home>
         </Route>

         <Route path="/login">
            <Login></Login>
         </Route>

         <PrivateRoute path="/admin">
            <OrderedList></OrderedList>
         </PrivateRoute >

         <PrivateRoute path="/book/:price">
            <Book></Book>
         </PrivateRoute>

         <PrivateRoute path="/addReview">
            <AddReview></AddReview>
         </PrivateRoute>

         <PrivateRoute path="/orderedList">
            <OrderedList></OrderedList>
         </PrivateRoute>

         <PrivateRoute path="/addService">
            <AddService></AddService>
         </PrivateRoute>

         <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
         </PrivateRoute>

         <Route exact path="/">
            <Home></Home>
         </Route>

         <Route path="*">
            <NoMatch></NoMatch>
         </Route>
       </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
