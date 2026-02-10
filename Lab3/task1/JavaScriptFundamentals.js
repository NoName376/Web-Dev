// 2.1
alert("I'm JavaScript!");

// 2.4
let admin, name;
name = "John";
admin = name;
alert( admin );

let ourPlanetName = "Earth";
let currentUserName = "John";

// 2.6
let nameUser = prompt("What is your name?", "");
alert( nameUser );

// 2.8
let a = 1, b = 1;
let c = ++a; 
let d = b++; 

let a2 = 2;
let x = 1 + (a2 *= 2); 

"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

let a3 = +prompt("First number?", 1);
let b3 = +prompt("Second number?", 2);
alert(a3 + b3);

// 2.9
5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

// 2.10
if ("0") {
  alert( 'Hello' );
}

let value = prompt('What is the "official" name of JavaScript?', '');
if (value == 'ECMAScript') {
  alert('Right!');
} else {
  alert('You don\'t know? ECMAScript!');
}

let valueNum = prompt('Type a number', 0);
if (valueNum > 0) {
  alert( 1 );
} else if (valueNum < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

let result = (a + b < 4) ? 'Below' : 'Over';

let login = prompt("Who's there?", '');
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

// 2.11
alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1, then 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 1, then undefined
alert( null || 2 && 3 || 4 ); // 3

let age = 20;
if (age >= 14 && age <= 90) {}

if (!(age >= 14 && age <= 90)) {}
if (age < 14 || age > 90) {}

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

let userName = prompt("Who's there?", '');
if (userName === 'Admin') {
  let pass = prompt('Password?', '');
  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }
} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( 'I don\'t know you' );
}

// 2.13
let i = 3;
while (i) {
  alert( i-- );
}

let i2 = 0;
while (++i2 < 5) alert( i2 );

let i3 = 0;
while (i3++ < 5) alert( i3 );

for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

let i4 = 0;
while (i4 < 3) {
  alert( `number ${i4}!` );
  i4++;
}

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  alert( i );
}

// 2.14
let browser = 'Edge';
if (browser === 'Edge') {
  alert("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

const number = +prompt('Enter a number between 0 and 3', '');
switch (number) {
  case 0:
    alert('You entered 0');
    break;
  case 1:
    alert('You entered 1');
    break;
  case 2:
  case 3:
    alert('You entered 2, or maybe 3');
    break;
}

// 2.15
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

function min(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

// 2.17
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);