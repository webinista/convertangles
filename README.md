ConvertAngles
=======

A simple JS library for converting degree units.

To use
-------------

Include convertangles.js in your HTML file as follows.

	<script src="/path/to/convertangles.js"></script>

In your JavaScript code, create a new Angles object.

	var Angles = new Angles();
	
Then you can use all of the functions. For example, to convert from degrees to radians:

	var result = Angles.degToRad( 360 );
	console.log( result ); // outputs 6.283185307179586 (or thereabouts)

