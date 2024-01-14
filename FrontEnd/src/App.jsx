import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/headers/header'
import Home from './components/home/home'
import ShelfDetails from './components/about/shelf_details'
import BookOverview from './components/book_overview/book_overview';
import Reviews from './components/reviews/reviews';
import UserReviews from './components/user_reviews/user_reviews';
import AllUsers from './components/all_users/all_users';

function App() {

  return (
    <div>
      <Header />
      <Home />
      <ShelfDetails />
      <BookOverview />
      <Reviews />
      <UserReviews />
      <AllUsers />
    </div>
  )
}

export default App
