var fs = require("fs");

var lookup = 	{"S01": "andhrapradesh","S02": "arunachalpradesh","S03": "assam","S04": "bihar","S05": "goa","S06": "gujarat","S07": "haryana","S08": "himachalpradesh","S09": "jammukashmir","S10": "karnataka","S11": "kerala","S12": "madhyapradesh","S13": "maharashtra","S14": "manipur","S15": "meghalaya","S16": "mizoram","S17": "nagaland","S18": "odisha","S19": "punjab","S20": "rajasthan","S21": "sikkim","S22": "tamilnadu","S23": "tripura","S24": "uttarpradesh","S25": "westbengal","S26": "chhattisgarh","S27": "jharkhand","S28": "uttaranchal","U01": "andamannicobarislands","U02": "chandigarh","U03": "dadranagarhaveli","U04": "damandiu","U05": "delhi","U06": "lakshadweep","U07": "puducherry"};

var rt = "AC_Data/States";
getDirectories(rt).forEach(rename);

function rename(state){
	var path = rt + "/" + state + "/" + state + "_AC";
	var exts = [".dbf",".shp",".shx",".json",".kml"];
	
	exts.forEach(function(ext){
		fs.rename(path + ext, rt + "/" + state + "/" + lookup[state] + "_AC" + ext, function(err) {
		    if ( err ) console.log("ERROR: " + err);
		});
	});
}

// Get all directories in another directory
// Requires "fs"
function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });
}