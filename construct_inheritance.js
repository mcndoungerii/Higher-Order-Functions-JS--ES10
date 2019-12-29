function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function() {
  return `${this.title} was created by ${this.author} in the year ${this.year}`;
};

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

//Inherit Book prototype using Object.create
Magazine.prototype = Object.create(Book.prototype);

Magazine.prototype.getSummary = function() {
  return `${this.title} was created by ${this.author} in ${this.month} ${this.year}`;
};

//Instance of a Magazine Object
const mag1 = new Magazine("Nipashe", "Ngugi wa Thiong'o", "2012", "Jan");
Magazine.prototype.constructor = Magazine;
// console.log(mag1);
console.log(mag1.getSummary());
