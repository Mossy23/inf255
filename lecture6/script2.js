// Create roster with one student
const roster = [
  {
    name: "Joseph",
    gpa: 3.2,
  },
];

// Add two more students
roster.push({
  name: "Mike",
  gpa: 2.5,
});

roster.push({
  name: "John",
  gpa: 1.8,
});

// Add isEnrolled property to every student
for (const student of roster) {
  student.isEnrolled = true;
}

// Manually set the first student to not enrolled
roster[0].isEnrolled = false;

// Print enrollment status
for (const student of roster) {
  if (student.isEnrolled) {
    console.log(student.name + " is enrolled");
  } else {
    console.log(student.name + " is not enrolled");
  }
}

// Function to check if student is passing
function checkIfPassing(student) {
  return student.gpa > 2.0;
}

// Check if each student is passing
for (const student of roster) {
  console.log(student.name, checkIfPassing(student));
}
