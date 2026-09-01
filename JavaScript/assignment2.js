let a = prompt("enter username");
let b = prompt("enter password");
function same(a, b) {
 let c = prompt("enter username");
 let d = prompt("enter password");
    if( (a === c) && (b === d)){
        console.log("Hello World");
    } 
    else {
        console.log("Incorrect");
    }
}


same(a,b);