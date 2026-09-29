const nameS : String = "Noelia";
const isActivity : boolean= true;
const years : number = 3;
const tools : string []= ["Playwright", "Postman", "TypeScript"];

const today : Date = new Date();
const formattedDate : string = today.toISOString().split("T")[0];

console.log(nameS);
console.log(isActivity);
console.log(years);
console.log(tools);
console.log(formattedDate);