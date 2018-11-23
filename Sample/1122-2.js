

var result  = o;
console.time('duration')
for (var i = 1; i < 10000; i++ ){

    result += i ;
}
console.timeEnd('duration');
