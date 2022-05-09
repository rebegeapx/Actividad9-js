
/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
if (student.hasOwnProperty("name"))
  console.log("El objeto SI tiene la propiedad name");
else{
  console.log("El objeto NO tiene la propiedad name");}

