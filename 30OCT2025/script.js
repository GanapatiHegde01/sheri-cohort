let count = 3;
let password = "Hello";
while (count > 0) {
  let Upassword = prompt("Enter the password");
  if (password === Upassword) {
    console.log("Correct password");
    break;
  } else {
    count--;
  }
  console.log("Account locked");
}
