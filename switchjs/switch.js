/*switch(key)
case value1:
    //action
    break;
case value2:// action2
    break;
default :
   //default action
   break;*/
switch (prompt("Where are you from?")) {
  case "Ganiyat":
    alert("You are from the southWest");
    break;
  case "Bolaji":
    alert("You are from the southsouth");
    break;
  case "Buhari":
    alert("You are from the north");
    break;
  default:
    alert("Are you a Nigerian?");
    break;
}
//Example 2*/
let age = prompt("How old are you?");
switch (true) {
  case age <= 20:
    alert("You are a teenager");
    break;
  case age > 20 && age <= 50:
    alert("You are an adult");
    break;
  default:
    alert("You are an old man");
    break;
}
