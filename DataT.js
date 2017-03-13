function dataTypes(inpu){

	if (( inpu == null) && ( inpu==undefined)){

	return "no value";

}

else if(inpu==true || inpu==false){

	return inpu ;
}

/*else if (){

	return val ;
}

else if (){

	return len;
}

else if (){

	return inpu;
}
else if (){

	return inpu;
}*/
}
console.log(dataTypes(false));
module.exports = {
	dataTypes: dataTypes
}