// Random Name Generator
// Max Babcock
// 10/17/2024

let names = ["John", "Jane", "Stefan"];

function setup() {
  createCanvas(windowWidth, windowHeight);

  print(names);
  names.push("Nigga");

  let lastname = names.pop();
  print(lastname);
  print(names);

  let firstname = names.shift();
  print(firstname);
  print(names);

  names.push("name 1")
  names.push("name 2")
  names.push("name 3")
  names.push("name 4")
  names.push("name 5")
  names.push("name 6")

  for(n of names){
    print(n);
  }

}

function draw() {
  background(220);
}
