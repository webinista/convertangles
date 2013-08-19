var Angles  = function(){};

Angles.prototype.toRadians = function(input){
	var unit = input.match(/deg|grad|rad|turn/)[0],
		num  = input.match(/[.0-9]{1,}/)[0],
		out;
	
	switch( unit ){
		case 'rad':
			out = num;
			break;
		case 'deg':
			out = num * ( Math.PI / 180 );
			break;
		case 'grad':
			out = num * ( Math.PI / 200 );
			break;
		case 'turn':
			out = num * ( 2 * Math.PI );
			break;
	}
		
	return out;
}


Angles.prototype.toDegrees = function(input){
	var unit = input.match(/deg|grad|rad|turn/)[0],
		num  = input.match(/[.0-9]{1,}/)[0],
		out;
	
	switch( unit ){
		case 'deg':
			out = num;
			break;
		case 'grad':
			out = num / ( 400 / 360 );
			break;
		case 'rad':
			out = num * ( 180 / Math.PI );
			break;
		case 'turn':
			out = num * 360;
			break;
	}
		
	return out;
}


Angles.prototype.toGradians = function(input){
	var unit = input.match(/deg|grad|rad|turn/)[0],
		num  = input.match(/[.0-9]{1,}/)[0],
		out;
	
	switch( unit ){
		case 'deg':
			out = num * (10/9);
			break;
		case 'grad':
			out = num;
			break;
		case 'rad':
			out = num * ( 200 / Math.PI );
			break;
		case 'turn':
			out = num * 400;
			break;
	}

	return out;
}

Angles.prototype.toTurns = function(input){
	var unit = input.match(/deg|grad|rad|turn/)[0],
		num  = input.match(/[.0-9]{1,}/)[0],
		out;
	
	switch( unit ){
		case 'deg':
			out = num / 360;
			break;
		case 'grad':
			out = num / 400;
			break;
		case 'rad':
			out = num / (2 * Math.PI);
			break;
		case 'turn':
			out = num;
			break;
	}

	return out;
}

