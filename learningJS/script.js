
function array_methods()
{
    var a=[2,3,4,5,6];  // reference type 
    // a ke paas he khud ka 2,3,4,5,6 aur b ke paas he a ka 2,3,4,5,6
    b=a;
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





