const name = "Noelia";
const isActivity = true;
const years = 3;
const tools = ["Playwright", "Postman", "TypeScript"];

const today = new Date();
const formattedDate = today.toISOString().split("T")[0];

console.log(name);
console.log(isActivity);
console.log(years);
console.log(tools);
console.log(formattedDate);