/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
var ConstantStream = require( './../lib/main.js' );
var objectMode = require( './../lib/object_mode.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof objectMode, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			objectMode( 'beep', value );
		};
	}
});

tape( 'the function throws an error if provided an invalid `iter` option', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		-5,
		3.14,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			objectMode( 'beep', {
				'iter': value
			});
		};
	}
});

tape( 'if provided an invalid readable stream option, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			objectMode( 'beep', {
				'highWaterMark': value
			});
		};
	}
});

tape( 'the function returns a stream instance', function test( t ) {
	var s = objectMode( 'beep' );
	t.equal( s instanceof ConstantStream, true, 'returns a stream instance' );
	t.end();
});

tape( 'the function returns a stream instance (options)', function test( t ) {
	var s = objectMode( 'beep', {} );
	t.equal( s instanceof ConstantStream, true, 'returns a stream instance' );
	t.end();
});

tape( 'the function returns a stream which always streams the same value', function test( t ) {
	var iStream;
	var value;
	var opts;
	var s;

	value = [ 1, 2, 3, 4 ];

	opts = {
		'iter': 10
	};
	s = objectMode( value, opts );
	s.on( 'end', onEnd );

	opts = {
		'objectMode': true
	};
	iStream = inspectStream( opts, inspect );

	s.pipe( iStream );

	function inspect( v ) {
		t.equal( v, value, 'returns expected value' );
	}

	function onEnd() {
		t.end();
	}
});

tape( 'the function does not support overriding the `objectMode` option', function test( t ) {
	var iStream;
	var opts;
	var s;

	opts = {
		'objectMode': false,
		'iter': 10
	};
	s = objectMode( 'beep', opts );
	s.on( 'end', onEnd );

	opts = {
		'objectMode': true
	};
	iStream = inspectStream( opts, inspect );

	s.pipe( iStream );

	function inspect( v ) {
		t.equal( v, 'beep', 'returns expected value' );
	}

	function onEnd() {
		t.end();
	}
});
