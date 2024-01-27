import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/headers/header';
import Home from './components/home/home';
import ShelfDetails from './components/about/shelf_details';
import BookOverview from './components/book_overview/book_overview';
import Reviews from './components/reviews/reviews';
import UserReviews from './components/user_reviews/user_reviews';
import AllUsers from './components/all_users/all_users';
import UserDetails from './components/user_details/user_details';
import CreateAccount from './components/create_account/create_account';
import LoggedInHome from './components/logged_in_home/logged_in_home';
import CreateRating from './components/create_rating/create_rating';

function App() {

  return (
    <div>
      { <BrowserRouter>
        <Routes>
          <Route path="shelf" element={<ShelfDetails />} />
          <Route path="book" element={<BookOverview />} />
          <Route path="all_users" element={<AllUsers />} />
          <Route 
            path="/all_users/user/:id" 
            element={<UserDetails />} 
            loader={({ id }) => {console.log(id)}}
          /> 
          <Route path="homepage" element={<Home />} />
          <Route path="create_account" element={<CreateAccount />} />
          <Route path="user_home" element={<LoggedInHome />} />
          <Route path="create_rating" element={<CreateRating />} />
        </Routes>
      </BrowserRouter> }
      {/* <Header />
      <Home />
      <CreateAccount />
      <ShelfDetails />
      <BookOverview /> 
      <Reviews />
      <UserReviews />
      <AllUsers />
    <UserDetails /> */}
    </div>
  );
}

export default App
