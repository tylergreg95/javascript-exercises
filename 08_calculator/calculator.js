const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  if (nums.length === 0) { return 0; } 
  return nums.reduce((total, num) => total + num);
};

const multiply = function(nums) {
  return nums.reduce((total, num) => { return total * num}, 1);
};

const power = function(num, exp) {
	answer = 1;
  for(let i = 0; i < exp; i++) {
    answer *= num;
  }
  return answer;
};

const factorial = function(a) {
	if (a == 0) {
    return 1;
  } 
  let answer = 1;
  for (let i = 1; i <= a; i++) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
