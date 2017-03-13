function dataTypes(inpu){
console.log (typeof(inpu))
	if (( inpu == null) && ( inpu==undefined)){

	return "no value";

}
else if (typeof inpu== 'string'){

	return inpu.length;
}

else if(inpu==true || inpu==false){

	return inpu ;
}

else if (inpu<100){

	return 'less than 100' ;

}
else if (inpu>100){
		return 'more than 100'
	}
else if (inpu==100){

		return 'equal to 100'
	}



/*
else if (){

	return inpu;
}
else if (){

	return inpu;
}*/
}
console.log(dataTypes(''));
module.exports = {
	dataTypes: dataTypes
}