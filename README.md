```sh
Describe luhnRule()
```
Test: "It should remove all nonnumber and return an arry with reversed order"\
Code:\
const input = "4102-0808-8043-5620";\
luhnRule(input);\
Expected Output: ['0', '2', '6', '5', '3', '4', '0', '8', '8', '0', '8', '0', '2', '0', '1', '4']

Test: "It should return checkedNumArr which will be doubled in next step and uncheckedNumArr won't be doubled"\
const input = "4102-0808-8043-5620";\
luhnRule(input);\
Expected Output: [0, 6, 3, 0, 8, 8, 2, 1], [2, 5, 4, 8, 0, 0, 0, 4]

Test: "It should return a transformed arr follow the Luhn double rule"\
const input = "4102-0808-8043-5620";\
luhnRule(input);\
Expected Output: [0, 3, 6, 0, 7, 7, 4, 2]

Test: "It should sum all digits from the uncheckedNumArr and the doubledcheckedNumArr"\
const input = "4102-0808-8043-5620";\
luhnRule(input);\
Expected Output: 52

Test: "It should return true if the sum ends zero"\
const input = "4102-0808-6043-5620";\
luhnRule(input);\
Expected Output: true