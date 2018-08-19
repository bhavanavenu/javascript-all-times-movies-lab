/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
// function turnHoursToMinutes(movies) {
//     return movies.map(movie => {
//       return { ...movie, duration: convertHoursIntoMinutes(movie.duration) };
//     });
//   }
  function turnHoursToMinutes(movies){    
  var moviesNew = movies;
 for( i=0; i<moviesNew.length;i++){
     moviesNew[i].duration = convertHoursIntoMinutes(moviesNew[i].duration)
 }
return moviesNew;
}

  function convertHoursIntoMinutes(duration) {
    var totalHours = 0;
    var minutes = 0;
    var durations = duration.split(" ");
    durations.forEach(val => {
      if (val.includes("min")) minutes = getMin(val);
      else totalHours = getHours(val);
    });
    return Number(totalHours) * 60 + Number(minutes);
  }
  
  function getMin(duration) {
    return duration.substring(0, duration.length - 3);
  }
  
  function getHours(duration) {
    return duration.substring(0, duration.length - 1);
  }

 // console.log(turnHoursToMinutes(movies));
// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
