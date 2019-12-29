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

//Instance of an Object
const book1 = new Book("Rich Kid, Poor Daddy", "Robert Kiwasaki", "2002");
book1.reverse("2012");
console.log(book1);
