import { strictEqual } from "./strictEqual.js";
const positNum = 1;
const strnumber = "1";
const neutralNumber = 0;
const negativezero = -0;
const noNumber = NaN;
const negNum = -1;
const yes = true;
const No = false;
const abc = "water";
const cba = "oil";

const print = (a, b) => {
  console.log(`Checking ${a} with ${b}`);
  console.log(strictEqual(a, b));
};

print(positNum, positNum);
print(noNumber, noNumber);
print(negativezero, neutralNumber);
print(neutralNumber, negativezero);
print(strnumber, positNum);
print(yes, No);
print(No, No);
print(abc, cba);
