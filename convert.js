var Convert = function(){};
var Angles  = function(){};

Angles.prototype.degToRad = function(degree){
	return degree * ( Math.PI / 180 );
}

Angles.prototype.degToTurn = function(degrees){
	return degrees * (1 / 360);
}

Angles.prototype.degToGrad = function(degree){
	return degree / ( 360 / 400 );
}

Angles.prototype.gradToDeg = function(gradians){
	return gradians / ( 400 / 360 );
}

Angles.prototype.gradToRad = function(gradians){
	 return gradians * ( Math.PI / 200 );
}

Angles.prototype.gradToTurn = function(gradians){
	return gradians * ( 1 / 400 );
}

Angles.prototype.turnToDeg = function(turns){
	return turns * 360;
}

Angles.prototype.turnToRad = function(turns){
	return turns * ( 2 * Math.PI );
}

Angles.prototype.turnToGrad = function(turns){
	return turns * 400;
}

Angles.prototype.radToDeg = function(radians){
	return radians * ( 180 / Math.PI );
}

Angles.prototype.radToGrad = function(radians, dontRound){
	 var rToG = radians * ( 200 / Math.PI ), returnvalue; 	 
	 (dontRound === true) ? returnvalue = rToG : returnvalue = Math.round( rToG );
	 return returnvalue;
}

Angles.prototype.radToTurn = function(radians){
	 var toDegrees = this.radToDeg( radians ); 
	 return this.degToTurn( toDegrees );
}


Convert.prototype.Angles = new Angles();
