class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was created by ${this.author} in the year ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old..`;
  }

  reverse(newYear) {
    this.year = newYear;
    this.reversed = true;
  }
}

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

//Instatiate a Magazine Object

const mag1 = new Magazine("Dead Stay Dumb", "James Hadley Chase", 2019, "May");
console.log(mag1);
