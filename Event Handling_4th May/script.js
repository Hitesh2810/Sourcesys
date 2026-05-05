function orderSummary(tax, ...items) {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return total + tax;
}

console.log(orderSummary(20, { name: "Book", price: 100 }, { name: "Pen", price: 20 }));

const colors1 = ["red", "blue"];
const colors2 = [...colors1, "green"];

console.log(colors1);
console.log(colors2);

const student = { name: "Rahul", marks: 85 };
const updatedStudent = { ...student, grade: "A" };

console.log(updatedStudent);

const course = {
  title: "JavaScript",
  instructor: {
    name: "Arjun",
    experience: 5
  }
};

const { instructor: { name: instructorName, experience } } = course;
console.log(instructorName, experience);

const numbers = [10, 20, 30];
const [x, y] = numbers;
console.log(x, y);