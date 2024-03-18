//Topics covered in js part2
/*1. 3  Differences b/w Var, Let, Const
2.Window Object
3.Browser Context API
4.Stack , heap
5. Execution Context
6. Lexical Environment
7.How to copy reference values
8.Truthy vs Falsy
9.ForEach Loop
10. For in Loop
11.Callback Function
12.First Class Functions
13.How Arrays are made behind the scenes, How we can make negative indexes arrays in JS
14.How to delete Object Prop*/ 


function array_methods()
{
    var a=[2,3,4,5,6];  // reference type 
    // a ke paas he khud ka 2,3,4,5,6 aur b ke paas he a ka 2,3,4,5,6
    var b=a;
    b.pop(); //pop removes el from end
    
    // push -> adding an el at end of array
    a.push(9)  //  [2, 3, 4, 5, 9]
    
    //unshift -> adds el at beginning of the array
    a.unshift(1); //[1, 2, 3, 4, 5, 9]
    //shift -> removes el form beginning of the array
    a.shift(); //[2, 3, 4, 5, 9]
    
    //splice-> to remove any intermediate els
    a.splice(2,1) //splice(index, no.of vals to be del)  // [2, 3, 5, 9]
    
}

// TOPIC: how to copy referece variables
function copyReference(){
    var a=[1,2,4,56,46];
    var b= [...a]; // use of spread operator '...' to copy the reference variables
    b.pop() //[1, 2, 4, 56]   and a is [1, 2, 4, 56, 46] 
    
    //copying objects
    var myObj={
        name: "unima",
        age:90
    };
    var copiedObj={...myObj};
    
}


// TOPIC: objects
function learning_objects(){
     // blank obj
     var student_a={

     }
    //filled obj
     var student_b={
        name: "eniu", // all these till id are properties
        age:3,
        class: "nursery",
        id: 234553,
        work: function(){  // this is a method
            console.log("hi")
        } 

     }

     console.log(student_b.name);  //eniu
     console.log(student_b); //{name: 'eniu', age: 3, class: 'nursery', id: 234553, work: ƒ}
     student_b.age=8; // {name: 'eniu', age: 8, class: 'nursery', id: 234553, work: ƒ}
}

// TOPIC: 3 differences b/w var let and const
function aboutVarLetConst(){
    var s="ruhi";  // present in window object appears when u type window in console
    
    let name="hi there"
      
    // var in es5
    //var is function scoped
    // var adds itself to the window object(jo featues js browaser se leta hai ,browser ke window se)
    // WHICH IS NOT GOOD AS IT EXPSOSES UR VAR 
    
    //let const in es6
    //let and const are braces scope
    //lets and const doesnt add
    
}

// TOPIC: Browser context api:
// It contains the window object , stack and Heap
// heap: is used to store intermediary data eg: 1+2+4+5+17+91 -> how browser does  it 1+2=3 3+4=7 .toFixed.apply.an so on
// so the data 3, 7 that is generated in between but not the final answer is stored in the heap



// TOPIC : Execution Context: is an imaginary container that us called whenever a function is executed, it contains 3
// things 1)variables inside that function 2) functions defined inside it 3) Lexiacal environment

// TOPIC: Lexical Environment: its a chart that holds its scope and scope ChannelSplitterNode, it tells which function 
// can acess which variales, child function can acess parent variables but vice versa it doesnt allow

//TOPIC: Truthy and Falsy
// falsy values are: 0 false NaN undefined null document.all
// apart from these , all other are truthy vlaues

// TOPIC: for each
// it makes changes in arrays temporary copy not on original arrray
function foreach_loop(){
    var a=[1,2,34,54,3,65,23];

    a.forEach(function(val){
       console.log(val-1);
    })
   
}

 //TOPIC: for in 
 function forINLoop()
 {
    var obj={
        age: 45,
        city:"tirupati"
      }
    
    for(var key in obj)
    {
        console.log(key,obj[key]); //age 45
        // city tirupati
    }
 }

 function callbackFn(){
// TOPIC: callback function its a topic in asynchronous js
//aisa code jo baad me chalta hai use hum ek function dete hai, ki jab tum complete ho jaao to ye function chalalena,
//aur jo function hum dete hai ,wo ek normal fn hi hai , jisko call back fn kehte hai

setTimeout(function(){
    console.log("hello I ran after 3 seconds");
 },3000)

 }

 function FirstClassFn(){
//TOPIC: First class fn
 //functions are treated as normal values in JS, we can even pass them as arguments to another fn

// var a= function(){};
function abcd(val)
{
   val();  //hi
}

abcd(function(){console.log("I AM SHOCKED");})

}


function howArrayStored(){
//TOPIC: how arrays are stored
typeof[] // object 
typeof{} //object
// correct way of checking if its array or obj
Array.isArray([]) //true
Array.isArray({}) //false

var a=[12,34,54,67];

//actually stored as
var a={
    1:12,
    2:34,
    3:54,
    4:67
}

//negative indexing is also allowed

a[-1]=90 // [12, 34, 54, 67, -1: 90]  // if actual array version is also defined{1: 12, 2: 34, 3: 54, 4: 67, -1: 90}
}

//TOPIC : deleting obj prop

var obj={
    name:"yaar",
    school:"sheriyans"
}

delete obj.name

