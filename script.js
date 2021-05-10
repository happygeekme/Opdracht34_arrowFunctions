// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions()

let ikRockArrowFunctions2 = () => {
    console.log("Joe, ik rock de arrow functions!");
}; 
  ikRockArrowFunctions2()

  let ikRockArrowFunctions3 = () => console.log("Joe, ik rock de arrow functions!"); 
  
  ikRockArrowFunctions3()

  const fivePlusSeven = function () {
    return 5 + 7
  };
  
  fivePlusSeven();

let fivePlusSeven2 = () => console.log(5 + 7);
  
  fivePlusSeven2();

  let Myfunction = (a, b) => console.log(a + b);
Myfunction(3,7);

let addFive = a => console.log(a + 5);
addFive(7);

const createObject = () => ({ greeting: "hoi" });

let object = createObject();
console.log(object);
