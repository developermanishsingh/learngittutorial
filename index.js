let sum=(a,b)=>{
    return a+b;
}

let add=function(a,b){
console.log(a+b);
}

let student={
sub:function(a,b)
{
    console.log(a-b);
}
};

let employee={
    rollcode:25,
    Getdata()
    {
        console.log(`student roll is ${this.rollcode}`);
    }
    };
 
employee.Getdata();
student.sub(50,49);
add(20,30);

//console.log(sum(10,30));