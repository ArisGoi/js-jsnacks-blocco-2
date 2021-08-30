var array01 = ["el-0", "el-1", "el-2", "el-3", "el-4", "el-5"];
var array02 = ["el-0", "el-1"];

var i = 2;
while (array01.length > array02.length){
    array02.push("el-" + i);
    i++
}

var i = 7;
while (array01.length < array02.length){
    array01.push("el-" + i);
    i++
}

console.log(array01);
console.log(array02);