import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import {getGenres} from '../services/fakeGenreService';
import MoviesPagination from "./common/MoviesPagination";
import {Pagination} from './utils/pagination'
import ListGroup from './common/listGroup';
import '../styles/movies.css';
import MoviesTable from "./moviesTable";

export default class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    CurrentPage: 1,
    pageSize : 3,
    selectedGenre:'',
    allGenres:{ _id: "5b21ca3eeb7f6fbccd471818123", name: "All" }
  };

  componentDidMount(){
    this.setState({movies: getMovies(), genres: getGenres()});
  }
 
  render() {
    const {pageSize, movies: allMovies, selectedGenre} = this.state;
    const { length: count } = this.state.movies;
    let filtered = [];
    if(selectedGenre){
      filtered = selectedGenre.name === 'All' ? allMovies: allMovies.filter(m=> m.genre.name === selectedGenre.name);
    }else{filtered = selectedGenre ? allMovies.filter(m=> m.genre.name === selectedGenre.name) : allMovies;}
    const movies = Pagination(filtered, this.state.CurrentPage, this.state.pageSize);
    console.log('Movies loaded from _dash is ',movies);
    if (count === 0)
      return <p>There are no movie records in the database!</p>;
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup Items={[this.state.allGenres,...this.state.genres]} onGenreSelect={this.handleGenreSelect}
          SelectedGenre={this.state.selectedGenre}
          />
        </div>
        <div className="col">
        <p>Showing {filtered.length} movies in the database</p>
        <MoviesTable movies={movies} onDelete={this.handleDelete} onLike={this.ToggleLike} onSort={this.handleSort}/>

        <MoviesPagination movieProps ={filtered} pageSize = {pageSize} OnPageChange={this.HandlePageChange} currentPage ={this.state.CurrentPage}/>
        </div>


      </div>
    );
  }

  //#region FUNCTIONS

  handleSort=(path)=>{
    console.log(path);
  }

  handleGenreSelect=(genre)=>{
    console.log('Genre selected', genre);
    this.setState({selectedGenre: genre, CurrentPage: 1});
    // const movies = this.state.movies.filter(m=> m.genre.name === genre.name);
    // this.setState({movies});
  }

  handleDelete=(movieid)=> {
    console.log(movieid);
    let confirmz = window.confirm("Sure you wwant to delete?");
    console.log(this.state.movies);
    if (confirmz) {
      let movz = [...this.state.movies];
      movz = movz.filter(m => m._id !== movieid);
      this.setState({ movies: movz });
    }
  }

  HandlePageChange=(page)=>{
    this.setState({CurrentPage: page});
    console.log('Page changed to ', page);
  }

  ToggleLike=(LikeId)=>{
    let movies = [...this.state.movies];
    const index = movies.indexOf(LikeId);
    movies[index].liked  = !movies[index].liked;
    this.setState({movies});

  }
  //#endregion
}
