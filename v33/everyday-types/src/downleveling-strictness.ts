// DOWNLEVELING
// Om du använder es5 i tsconfig.json så görs `` om till concat
// för ``finns inte i äldre versioner av javascript.
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());

const time = Date(); // Date() returnerar en string inte en Date

// STRICTNESS
// noImplicitAny - du måste skriva ut typerna i funktioner
// strictNullChecks - måste alltid kolla om något är null
function myFunction(myName: string | null) {
  if (myName == null) {
    return;
  }

  return myName.toUpperCase();
}

myFunction(null);

myFunction("Sven");
