const bookProtos = {
  getSummary: function() {
    return `${this.title} was created by ${this.author} in the year ${this.year}`;
  },
  getAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old..`;
  }
};

const book1 = Object.create(bookProtos);
book1.title = "Mabala The Farmer";
book1.author = "Mabala S. Richard";
book1.year = 2016;
console.log(book1);
