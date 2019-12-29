const bookProtos = {
  getSummary: function() {
    return `${this.title} was created by ${this.author} in the year ${this.year}`;
  },
  getAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old..`;
  }
};

const book1 = Object.create(bookProtos, {
  title: { value: "Mabala The Farmer" },
  author: { value: "Richard S. Mabala" },
  year: { value: 2019 }
});

console.log(book1);
