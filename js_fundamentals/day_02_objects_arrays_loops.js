// var sports = ['football', 'tennis', 'rugby'];


// sports[0] = 'lacrosse'
// console.log(sports.length);
// console.log(sports[0]);
// sports.push('snooker');
// sports.push('chess');
// sports.pop();
// console.log(sports);
// console.log(sports.pop());
// sports.unshift('kungfu');
// sports.splice(1, 1);
// console.log(sports);


// for (var sport of sports) {
  // console.log(`sport: ${sport}`);
// }

// for (var sport of sports) {
//   var upperCased = sport.toUpperCase();
//   console.log(upperCased);
// }

// looping through every second object

// for (var i = 0; i < sports.length; i += 2) {
//   console.log(sports[i]);
//
// }


var movie = {
  title: 'Aliens',
  year: 1989,
  language: 'English',
  ratings: {
    critic: 94,
    audience: 95
  }

};

movie.cast = ['Sigourney Weaver', 'Alien'];

movie.language = 'German';

movie['subtitle-language'] = 'Spanish';

movie.year = null;

// getting keys of objects

// var ourkeys = Object.keys(movie);
// console.log(ourkeys);

// getting values of object

// var ourvalue = Object.value(movie);
// console.log(ourvalue);

// delete movie.year;

// console.log(movie.ratings.critic);
// console.log(movie.cast[1]);

// var cast = movie.cast;
// for (actor of movie.cast) {
//   console.log(actor);
// }
