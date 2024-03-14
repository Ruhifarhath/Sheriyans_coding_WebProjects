
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

var a=[1,2,4,56,46];
var b= [...a]; // use of spread operator '...' to copy the reference variables
b.pop() //[1, 2, 4, 56]   and a is [1, 2, 4, 56, 46] 
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

// Topic: Browser context api:
// It contains the window object , stack and Heap
// heap: is used to store intermediary data eg: 1+2+4+5+17+91 -> how browser does  it 1+2=3 3+4=7 .toFixed.apply.an so on
// so the data 3, 7 that is generated in between but not the final answer is stored in the heap



// Topic : Execution Context: is an imaginary container that us called whenever a function is executed, it contains 3
// things 1)variables inside that function 2) functions defined inside it 3) Lexiacal environment

// Topic: Lexiacl Environment: its a chart that holds its scope and scope ChannelSplitterNode, it tells which function 
// can acess which variales, child function can acess parent variables but vice versa it doesnt allow





