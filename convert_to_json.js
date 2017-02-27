var fs = require("fs"),
	Shp = require("shp");

var rt = "AC_Data/States";
getDirectories(rt).forEach(convert);

function convert(state){
	var path = rt + "/" + state + "/" + state + "_AC";
	Shp.readFile(path, function(error, data){
	   	fs.writeFileSync(path + ".json", JSON.stringify(data)); // write the file
	});	
}

// Get all directories in another directory
// Requires "fs"
function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });
}