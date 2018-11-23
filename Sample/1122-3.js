
var path =  require ('path');

var dir = [ 'user','jun','test'];
var projDir =  dir.join(path.sep);
console.log(projDir);

var exePath = path.join(projDir,'test.exe');
console.log (exePath);


var dirName = path.dirname(exePath);
var baseName = path.basename(exePath);
var extName = path.extname (exePath);



console.log("Directory = %s", dirName);
console.log("Base name = %s", baseName);
console.log("Ext Name = %s", extName);


 //var savePath = "C:\User\goya\Documents\Save";
 // var evenPath = "C:\User\goya\Documents\Event";