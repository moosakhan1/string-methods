function stringmethods(){
let a =prompt("enter your first name")
let b =prompt("enter your last name")
console.log(a  + " " + b)


let c =prompt("enter  your favorite mobile");
console.log(c)
console.log(c.length)


let d = "pakistani"
console.log(d[7])


let e = "Hello World"
console.log(e[9])


let f = "pakistani"
console.log(f[3])


let g = "Hyderabad"
let h = g.replace("Hyder", "Islam")
console.log(h)


var message = `Ali and Sami are best friends. They play cricket and football together.`;
let i = message.replace("and" , "&")
console.log(i)


let j =+ "472"
console.log( j)


let k =prompt("enter your word");
let m = k.toUpperCase()
console.log(m)


let n = 33.39;
let o =n.toString() ;
console.log(o)


let p =prompt("enter your name");
console.log(p)
if (p === p.includes("@")){
    if(p === p.includes("!")){
    }
    if(p === p.includes(",")){
    }
    if(p === p.includes(".")){
    }
    let y =prompt("enter your character name");
    console.log(y)
    console.log(p)
}
else{
    let y =prompt("enter your character name");
}


let x =prompt("enter your item");
console.log(x)
let z = ["cake", "apple pie", "cookie", "chips", "patties"];
console.log(z)
for (let i = 0;i<z.length ;i++){
    console.log(z[i])
    if (x === z[i]){
        console.log(`${x} is perent at index ${[i]}`)
    }
}
function generatePass() {
    let pass = '';
let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$`;
// console.log(str)
for (let i = 1;i<7 ; i++){
  let random =  Math.floor(Math.random()*str.length)
  
  console.log(random)
    pass+=str[random]
}
console.log(pass)
}
generatePass()


let University = "University  of Karachi";
let Karachi = University.split();
console.log(Karachi)
for (let i = 0;i<Karachi.length ; i++){
    console.log(Karachi[i])
}
}
stringmethods()

