# WDE06 Looping Lanes: Mastering Loops and Conditionals in JavaScript
![Screenshot of the finished webpage](./assets/images/example.png)

## Description 📄
In this assignment, you will work with arrays and loops in JavaScript to demonstrate basic iteration, conditional logic, and operations like doubling a value. You will create arrays for student names, numbers, and scores, and use loops to output meaningful information based on each dataset. Additionally, you will explore how to double a value repeatedly using a `while` loop.

## Expected Project Structure 🏗️
Your project will have the following structure:
```
javascript-loops/
  index.js
```


# Instructions ✅

## 1. **Create the Project Folder and Files**
Setup your project structure. 

   - [ ] Create a folder named `javascript-loops` to store all your project files.
   
   - [ ] Inside the `folder name` folder, create a file named `index.html`. This will be your main HTML file.
   



### 2. Looping Through Student Names
Start by creating an array of student names and use a `for` loop to display each student's name in the console.

  - [ ] Open your currently empty index.js file and add the following code to it.


```javascript
// Create an array of student names and loop through them using a for loop
const students = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
console.log("Student List:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
```

- [ ] Using `node`,  run the `index.js` file in a terminal and verify output.

**Expected Output:**
```
Student List:
Alice
Bob
Charlie
Diana
Eve
```

You should see the names of the students printed one by one in the console.

**Explanation:**
- We create an array `students` with five names.
- A `for` loop is used to iterate through the array.
- Each student's name is printed to the console using `console.log()`.

##

### 3. Looping Through Numbers and Checking Even or Odd
The goal of this task is to create a simple JavaScript program that demonstrates how to iterate over an array of numbers and classify them as either "even" or "odd." You will use a for loop to go through each number in the array, apply conditional logic to check if the number is divisible by 2, and print a message for each result. 

- [ ] Next, add the following code to your `index.js` file to check if the numbers are even or odd.

```javascript
// Create an array of numbers and loop through to display even or odd
const numbers = [10, 15, 20, 25, 30];
console.log("Even and Odd Numbers:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i] + " is even");
  } else {
    console.log(numbers[i] + " is odd");
  }
}
```

- [ ] Using `node`, run the `index.js` file and verify the output.

**Expected Output:**
```
Even and Odd Numbers:
10 is even
15 is odd
20 is even
25 is odd
30 is even
```

**Explanation:**
- We create an array `numbers` with five values.
- The for loop iterates over each element in the numbers array.
- For each element, we use the modulus operator (%) to check whether the number is divisible by 2:
    - If the result is 0, the number is even, and a message is printed indicating that it is even.
    - If the result is not 0, the number is odd, and a message is printed indicating that it is odd.
- This process is repeated for all numbers in the array, and the appropriate message for each number is printed to the console.

---

### 4. Checking Passing Scores
We create an array `scores` and check if each score is passing (>= 60) or failing.

- [ ] Add the following code to your `index.js` file to check if the scores are passing or failing.

```javascript
// Create an array of scores and check if a score is passing (>= 60)
const scores = [45, 62, 85, 30, 75];
console.log("Score Status:");
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 60) {
    console.log("Score " + scores[i] + " is a pass");
  } else {
    console.log("Score " + scores[i] + " is a fail");
  }
}
```

- [ ] Using `node`, run the `index.js` file and verify the output.

**Expected Output:**
```
Score Status:
Score 45 is a fail
Score 62 is a pass
Score 85 is a pass
Score 30 is a fail
Score 75 is a pass
```

**Explanation:**
- We create an array `scores` that holds five different score values.
- A `for` loop is used to iterate over each score in the array.
- For each score, we use an `if` statement to check if the score is greater than or equal to 60:
  - If the condition is true (`scores[i] >= 60`), the score is considered a "pass," and a message is printed to the console indicating that the score is a pass.
  - If the condition is false, the score is considered a "fail," and a message is printed indicating that the score is a fail.
- The loop continues to run until it has checked each score in the array.
- This method is useful for evaluating test results or performance, where scores are compared against a passing threshold.

---

### 5. Using a While Loop to Double a Value
Now let's use a while loop to repeatedly double a value until it exceeds 100. You'll start with an initial value, double it each time, and print the result. This will show how while loops run based on a condition, continuing until the value exceeds the specified limit.

- [ ] Add the following code to your `index.js` file to demonstrate a `while` loop.

```javascript
// A while loop example: Keep looping while a value is less than 100
let value = 10;
console.log("Value Doubling Loop:");
while (value < 100) {
  console.log("Value is: " + value);
  value *= 2; // double the value in each iteration
}
```

- [ ] Using `node`, run the `index.js` file and verify the output.

**Expected Output:**
```
Value Doubling Loop:
Value is: 10
Value is: 20
Value is: 40
Value is: 80
```

**Explanation:**
- We start with a `value` initialized to 10.
- A `while` loop is used to keep doubling the value on each iteration, as long as the value is less than 100.
- Inside the loop, we print the current value before doubling it using the multiplication assignment (`*=`) operator.
- The loop continues to run until the value becomes 100 or more.
- This demonstrates how a `while` loop works when the number of iterations isn't fixed, but rather depends on a condition that must be met to stop the loop.



## Conclusion

In this lab assignment, you learned how to:
- Use `for` loops to iterate over arrays and output values.
- Apply conditionals to check for properties like even/odd numbers or pass/fail scores.
- Use a `while` loop to continuously perform operations until a condition is met.

 You practiced using for loops to iterate over arrays and apply conditionals to check for even/odd numbers and pass/fail scores. You also explored the while loop, which repeatedly executes code based on a condition, as shown by doubling a value until it exceeds 100.

By completing these tasks, you now have a solid understanding of loops and conditionals in JavaScript, which are key tools for automating repetitive tasks and making decisions in your code. 

You're ready to apply these techniques to more complex data sets and problems!

##

### Solution codebase 👀
🛑 **Only use this as a reference** 🛑

💾 **Not something to copy and paste** 💾

**Note:**  This lab references a solution file located [here](https://github.com/HackerUSA-CE/aisd-jse-conditional-loops/tree/solution) (link not shown).

---

© All rights reserved to ThriveDX
