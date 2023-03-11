//hoisting - lifting variable up through levels of scope
//Scooping

var x = 12
var y = 3

if (y < 4){
    // 1 scope
    if(x < 15){
    // 2 Scopes
        console.log('Less than 15')
    }
}