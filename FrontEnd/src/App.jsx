import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/headers/header';
import HeaderLoggedIn from './components/header_logged_in/header_logged_in';
import Home from './components/home/home';
import ShelfDetails from './components/about/shelf_details';
import BookOverview from './components/book_overview/book_overview';
import AllUsers from './components/all_users/all_users';
import UserDetails from './components/user_details/user_details';
import CreateAccount from './components/create_account/create_account';
import LoggedInHome from './components/logged_in_home/logged_in_home';
import CreateRating from './components/create_rating/create_rating';
import CreateShelf from './components/create_shelf/create_shelf';
import AddBook from './components/add_book_to_shelf/add_book_to_shelf';
import SearchRequest from './components/search_request/search_request';
import SearchUsers from './components/search_users/search_users';

function App() {

  // store user id in browser if logged in
  // let user_id=sessionStorage.getItem('user_id')

  const [user_id, setUserId] = React.useState(null)

  React.useEffect(() => {
    setUserId(sessionStorage.getItem('user_id'))
  }, []
  );


  if (user_id != null) {
    return (
      <div>
        
        { <BrowserRouter>
          <HeaderLoggedIn />
          <Routes>
            <Route path="shelf" element={<ShelfDetails />} />
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
            <Route path="/home" element={<LoggedInHome user_id={user_id}/>} />
            <Route path="/create_rating/:book" 
            element={<CreateRating />} 
            loader={({ book }) => console.log(book)}
            />
            <Route path="search_users" element={<SearchUsers />} />
            <Route path="create_shelf" element={<CreateShelf user_id={user_id}/>} />
            <Route path="add_book/:book" 
            element={<AddBook user_id={user_id}/>} 
            loader={({ book }) => console.log(book)}
            />
            <Route path="search_books" element={<SearchRequest/>} />
          </Routes>
        </BrowserRouter> }
      </div>
    );
  }

  else {
    return (
      <div>
        { <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<AllUsers />} />
            <Route 
              path="/users/user/:id" 
              element={<UserDetails />} 
              loader={({ id }) => {console.log(id)}}
            /> 
            <Route path="login" element={<Home />} />
            <Route path="create_account" element={<CreateAccount />} />
          </Routes>
        </BrowserRouter> }
      </div>
    );
  }

}

export default App
