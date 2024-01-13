import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/headers/header'
import Home from './components/home/home'
import ShelfDetails from './components/about/shelf_details'

function App() {

  return (
    <div>
      <Header />
      <Home />
      <ShelfDetails />
    </div>
  )
}

export default App
