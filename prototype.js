function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function() {
  return `${this.title} was created by ${this.author} in the year ${this.year}`;
};

Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old..`;
};

Book.prototype.reverse = function(newYear) {
  this.year = newYear;
  this.reversed = true;
};
//Instance of an Object (OR) instance of a constructor
const book1 = new Book("Book One", "Jane Doe", 2013); //this gives you an object
const book2 = new Book("Book Two", "Lamar odom", 2015);

// console.log(Object.values(book2));
// console.log(book2);

book2.reverse("2019");
console.log(book2);
