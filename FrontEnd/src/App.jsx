import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
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
import CreateShelf from './components/create_shelf/create_shelf';
import AddBook from './components/add_book_to_shelf/add_book_to_shelf';

function App() {
  const user_id=11;

  return (
    <div>
      { <BrowserRouter>
        <Header />
        <Routes>
          <Route path="shelf" element={<ShelfDetails />} />
          {/* <Route path="book" element={<BookOverview />} /> */}
          <Route 
            path="/book/:id" 
            element={<BookOverview />} 
            loader={({ id }) => {console.log(id)}}
          /> 
          <Route path="users" element={<AllUsers />} />
          <Route 
            path="/users/user/:id" 
            element={<UserDetails />} 
            loader={({ id }) => {console.log(id)}}
          /> 
          <Route path="login" element={<Home />} />
          <Route path="create_account" element={<CreateAccount />} />
          <Route path="home" element={<LoggedInHome user_id={user_id}/>} />
          <Route path="book/create_rating/:book" 
          element={<CreateRating />} 
          loader={({ book }) => console.log(book)}
          />
          <Route path="create_shelf" element={<CreateShelf user_id={user_id}/>} />
          <Route path="add_book" element={<AddBook user_id={user_id}/>} />
        </Routes>
      </BrowserRouter> }
    </div>
  );
}

export default App
