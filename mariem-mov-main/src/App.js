
import './App.css';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import MovieList from './components/MovieList';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
     <Header/>
     <MovieList/>
     <AddMovie/>

    </div>

  );
}

export default App;
