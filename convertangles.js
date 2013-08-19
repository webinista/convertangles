/* 
ConvertAngles.js 

Copyright (c) 2013 Tiffany B. Brown http://tiffanybbrown.com/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
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

