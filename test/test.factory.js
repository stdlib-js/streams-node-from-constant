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
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a factory function', function test( t ) {
	var createStream = factory();
	t.equal( typeof createStream, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a factory function (options)', function test( t ) {
	var createStream = factory({
		'iter': 10
	});
	t.equal( typeof createStream, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a factory function (parameters)', function test( t ) {
	var createStream = factory( 'beep' );
	t.equal( typeof createStream, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a factory function (parameters + options)', function test( t ) {
	var createStream = factory( 'beep', {} );
	t.equal( typeof createStream, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function which throws an error if not provided a string, Buffer, or Uint8Array in binary mode', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
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
			var createStream = factory();
			createStream( value );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided a string, Buffer, or Uint8Array in binary mode (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		void 0,
		null,
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
			var createStream = factory( value );
			createStream();
		};
	}
});

tape( 'the function returns a function which throws an error if provided an options argument which is not an object', function test( t ) {
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
			var createStream = factory( 'beep', value );
			createStream();
		};
	}
});

tape( 'the function returns a function which throws an error if provided an invalid `iter` option', function test( t ) {
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
			var createStream = factory({
				'iter': value
			});
			createStream( 'beep' );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an invalid `iter` option (parameters)', function test( t ) {
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
			var createStream = factory( 'beep', {
				'iter': value
			});
			createStream();
		};
	}
});

tape( 'if provided an invalid readable stream option, the function returns a function which throws an error', function test( t ) {
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
			var createStream = factory({
				'highWaterMark': value
			});
			createStream( 'beep' );
		};
	}
});

tape( 'if provided an invalid readable stream option, the function returns a function which throws an error (parameters)', function test( t ) {
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
			var createStream = factory( 'beep', {
				'highWaterMark': value
			});
			createStream();
		};
	}
});

tape( 'the function returns a factory function which creates stream instances', function test( t ) {
	var createStream;
	var i;

	createStream = factory();

	for ( i = 0; i < 10; i++ ) {
		t.equal( createStream( 'beep' ) instanceof ConstantStream, true, 'returns a stream instance' );
	}
	t.end();
});

tape( 'the function returns a factory function which creates stream instances (options)', function test( t ) {
	var createStream;
	var i;

	createStream = factory({
		'iter': 10
	});

	for ( i = 0; i < 10; i++ ) {
		t.equal( createStream( 'beep' ) instanceof ConstantStream, true, 'returns a stream instance' );
	}
	t.end();
});

tape( 'the function returns a factory function which creates stream instances (parameters)', function test( t ) {
	var createStream;
	var i;

	createStream = factory( 'beep' );

	for ( i = 0; i < 10; i++ ) {
		t.equal( createStream() instanceof ConstantStream, true, 'returns a stream instance' );
	}
	t.end();
});

tape( 'the function returns a factory function which creates stream instances (parameters + options)', function test( t ) {
	var createStream;
	var i;

	createStream = factory( 'beep', {} );

	for ( i = 0; i < 10; i++ ) {
		t.equal( createStream() instanceof ConstantStream, true, 'returns a stream instance' );
	}
	t.end();
});

tape( 'the function returns a function which creates streams which always stream the same value (empty object; object mode)', function test( t ) {
	var constantStream;
	var iStream;
	var value;
	var opts;
	var s;

	value = {};

	opts = {
		'iter': 10,
		'objectMode': true
	};
	constantStream = factory( value, opts );

	s = constantStream();
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
		t.pass( 'stream ended' );
		t.end();
	}
});
