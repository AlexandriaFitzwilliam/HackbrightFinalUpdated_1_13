import { useState } from 'react'
import './App.css'
import Header from './components/headers/header'
import Home from './components/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

export default App


// function UserShelfPage(props) {
//   const {books, setBooks} = props;
//   const bookCards = [];


//   // starting this with just one book sent in. will need to change to /api/view_all/<shelf_id>
//   React.useEffect(() => {
//     fetch(`/api/book/${book_id}`)
//       .then((response) => response.json())
//       .then((result) => setBooks(result));
//   }, []);

//   for (const book of Object.values(books)) {
//     const bookCard = (
//       <BookCard
//       id={book.book_id}
//       title={book.title}
//       author={book.author}
//       overview={book.overview}
//       publish_date={book.publish_date}
//       cover_pic={book.cover_pic}
//       avg_rating={book.avg_rating}
//       num_ratings={book.num_ratings}
//       />
//     );
//   }

// }

// function BookCard(props) {
//   const {
//     id, 
//     title, 
//     author, 
//     overview, 
//     publish_date, 
//     cover_pic,
//     avg_rating,
//     num_ratings} = props;

//   return (
//     <div className="card book_card">
//       <h5>${title}</h5>
//       <h6>${author}</h6>
//       <img src={cover_pic} className="card-img-top" />
//       <span>${avg_rating}</span>
//     </div>
//   )


// }




// function BookDetailsPage(props) {
//   const {book_id} = props

//   React.useEffect(() => {
//     fetch(`/api/book/${book_id}`)
//       .then((response) => response.json())
//       .then((result) => setBook)
//   })
// }