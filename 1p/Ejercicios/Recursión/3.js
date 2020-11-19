//fibonacci recursivo 

const fibonacci = num => {
  if (num < 2) return num;
 
  return fibonacci(num - 1) + fibonacci(num - 2);
};
 
for (let i = 0; i < 10; i++) console.log(fibonacci(i));