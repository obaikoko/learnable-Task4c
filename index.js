class Movie {
  constructor(title, genre, releaseYear, isAvailable = true) {
    this.title = title;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.isAvailable = isAvailable;
  }

  rentMovie() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} has been rented.`);
    } else {
      console.log(`${this.title} is not available for rent.`);
    }
  }

  returnMovie() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`${this.title} has been returned.`);
    } else {
      console.log(`${this.title} is already available.`);
    }
  }
}

class MovieStore {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
    console.log(`${movie.title} has been added to the movie store.`);
  }

  listAvailableMovies() {
    const availableMovies = this.movies.filter((movie) => movie.isAvailable);
    if (availableMovies.length === 0) {
      console.log('No movies available at the moment.');
    } else {
      console.log('Available Movies:');
      availableMovies.forEach((movie) =>
        console.log(`${movie.title} (${movie.releaseYear})`)
      );
    }
  }
}

// Example Usage
const movieStore = new MovieStore();

const movie1 = new Movie('Inception', 'Sci-Fi', 2010);
const movie2 = new Movie('The Shawshank Redemption', 'Drama', 1994);
const movie3 = new Movie('The Dark Knight', 'Action', 2008);

movieStore.addMovie(movie1);
movieStore.addMovie(movie2);
movieStore.addMovie(movie3);

movieStore.listAvailableMovies();

movie1.rentMovie();
movie2.rentMovie();

movieStore.listAvailableMovies();

movie1.returnMovie();

movieStore.listAvailableMovies();
