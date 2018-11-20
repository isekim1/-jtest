




// var obj = new Object(); 는  var obj = {} ; 와 동일하다 
 
 
 
var obj = {};

obj.name = " name1";
console.log(obj.name)



var obj2 = new Object();
obj2["name"] = "홍길동";

console.log(obj2.name);



var person = {

    name:"홍길동",
    age : 33,
    address:{
        zipcode :14500,
        city : "서울"
    }

}