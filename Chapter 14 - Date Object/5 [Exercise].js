// Calculate the time of a task

// Solution

function getTaskTime() {
  let startTime = new Date();

  // The Task
  let sum = 0;
  for (let i = 0; i < 1000000; i++) sum += i;

  console.log('Task Time:', new Date() - startTime, 'ms');
}

getTaskTime();
