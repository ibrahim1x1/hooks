import { useState } from 'react';
import './App.css';
import { Nvbar } from './components/Navbar';
import { Filter } from './components/Filter';
import { MovieList } from './components/MovieList';
import { AddMovie } from './components/Addmovie';

function App() {
    const [movies,setMovies] = useState([
      {title : "Batman" , description : "Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past." , posterURL : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo" , rating : 4,id : Math.random() },
      {title : "Spiderman" , description : "Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil maniac." , posterURL : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTb-iTrAmE_x35oWfFcFpgMbFtuG59NXUUoiOn0jMp93POq5YDH" , rating : 4,id : Math.random() },
      {title : "Superman Returns" , description : "Upon his return to Earth, Superman must deal with heartbreak and put his powers to test once again to stop his greatest arch-nemesis, Lex Luthor, from gaining complete control of the world." , posterURL : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2CZgJV_eSnJakoCvx6CLcqnFk85xvJYNpxmjuLzrdnsAkVvdl" , rating : 3,id : Math.random() },
    ])
  
    const [searchM,setSearchM] = useState('')
    const [rateM,setRateM] = useState(0)
  return (
    <div>
      <Nvbar/>  
      <br/>
      <div className='serch'>
      <AddMovie  movies={movies} setMovies={setMovies}/>
      <Filter setSearchM={setSearchM} setRateM={setRateM} searchM={searchM} rateM={rateM}/>
      </div>
      <br/>
      <MovieList movies={movies} setMovies={setMovies} searchM={searchM} rateM={rateM}/>
    </div>
  );
}

export default App;