const fs = require('fs');

function generateRandomSalary(age) {
  let baseSalary = 0;

  if (age >= 20 && age < 30) {
    baseSalary = Math.floor(Math.random() * 30000) + 30000; // Random salary between 30000 and 60000 for ages 20-29
  } else if (age >= 30 && age < 40) {
    baseSalary = Math.floor(Math.random() * 40000) + 50000; // Random salary between 50000 and 90000 for ages 30-39
  } else if (age >= 40 && age <= 45) {
    baseSalary = Math.floor(Math.random() * 50000) + 70000; // Random salary between 70000 and 120000 for ages 40-45
  }

  return baseSalary;
}

function generateRandomAge() {
  return Math.floor(Math.random() * (45 - 20 + 1)) + 20;
}

function generateCSVFile() {
  let csvContent = 'ID,Age,Salary\n';

  for (let i = 1; i <= 100; i++) {
    const age = generateRandomAge();
    const salary = generateRandomSalary(age);
    csvContent += `${i},${age},${salary}\n`;
  }

  fs.writeFile('Random Salaries.csv', csvContent, (err) => {
    if (err) {
      console.error('Error writing to CSV file:', err);
      return;
    }
    console.log('CSV file has been created!');
  });
}

generateCSVFile();
