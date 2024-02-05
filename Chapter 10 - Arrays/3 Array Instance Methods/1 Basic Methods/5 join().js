// Joining an array to a string

const A = ['Ahmed', 'Magdy', 'Ibrahim'];

// Use the join() method to join the elements of an array into a string

// It takes one argument: the separator

console.log(A.join()); // 'Ahmed,Magdy,Ibrahim'
console.log(A.join('')); // 'AhmedMagdyIbrahim'
console.log(A.join(' ')); // 'Ahmed Magdy Ibrahim'
console.log(A.join('@')); // 'Ahmed@Magdy@Ibrahim'
