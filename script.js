function showMymessage(){
    console.log("HELLOOOO");
}
const numbers = [1,2,3,4,5];
numbers.shift();
for(let i = 0;i < numbers.length;i++){
    console.log(numbers[i]);
}
console.log(numbers.includes(1));
function hame(name,fname){
    console.log("Hello " + name + " Hello " + fname);
}
name = "Gopi";
fname= "zaro";
hame(name,fname);
const zame = (name,fname) => {
    return "hello " + name + " and " + fname;
}
zame(name,fname);