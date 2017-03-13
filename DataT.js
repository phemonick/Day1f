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
else if ((inpu>100)){
		return 'more than 100'
	}
else if (inpu==100){

		return 'equal to 100'
	}


else if (typeof(inpu)=='object'){
	var s='undefined';
	if (inpu.length>1){
		var s=inpu[2];
}else{
	inpu=[];
	s='undefined'
}
return s;
}

else {

	return 'called callback';
}
}
console.log(dataTypes(44));
module.exports = {
	dataTypes: dataTypes
}