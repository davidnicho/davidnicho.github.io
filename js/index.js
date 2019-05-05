// DATATYPES //

console.log("started here log")

name = "david" // string

console.log(name)

age = 40 // string
console.log(age)

cool = true  //bool
console.log(cool)

children=["zoyi"] //array
console.log(children[0])

// building
david = {
name: name,
age: age,
cool: cool,
children: children
}
console.log(david)

//Functions

function printname(person) {
console.log(person.name)
}

printname(david)
 // if cool console will say yes or no
function decideifpersoncool(person) {
   
    if (person.cool){
        console.log(person.name + " is cool")
    } else {
        console.log(person.name + " is not cool")
    }
    
    decideifpersonCool(david)


}
