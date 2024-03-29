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
var Readable = require( 'readable-stream' ).Readable;
var isBuffer = require( '@stdlib/assert-is-buffer' );
var gcopy = require( '@stdlib/blas-base-gcopy' );
var string2buffer = require( '@stdlib/buffer-from-string' );
var Uint8Array = require( '@stdlib/array-uint8' );
var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
var constantStream = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof constantStream, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string, Buffer, or Uint8Array when in binary mode', function test( t ) {
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
			constantStream( value );
		};
	}
});

tape( 'the function throws an error if not provided a string, Buffer, or Uint8Array when in binary mode (options)', function test( t ) {
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
			constantStream( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			constantStream( 'beep', value );
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
			constantStream( 'beep', {
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
		5,
		NaN,
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
			constantStream( 'beep', {
				'objectMode': value
			});
		};
	}
});

tape( 'the function is a constructor which returns a readable stream', function test( t ) {
	var ConstantStream = constantStream;
	var s;

	s = new ConstantStream( 'beep' );
	t.equal( s instanceof Readable, true, 'returns expected value' );
	t.end();
});

tape( 'the constructor does not require the `new` operator', function test( t ) {
	var ConstantStream = constantStream;
	var s;

	s = constantStream( 'beep' );
	t.equal( s instanceof ConstantStream, true, 'returns expected value' );
	t.end();
});

tape( 'the constructor returns a readable stream (no new)', function test( t ) {
	var s = constantStream( 'beep' );
	t.equal( s instanceof Readable, true, 'returns expected value' );
	t.end();
});

tape( 'the returned stream provides a method to destroy a stream (object)', function test( t ) {
	var count = 0;
	var s;

	s = constantStream( 'boop' );

	t.equal( typeof s.destroy, 'function', 'has destroy method' );

	s.on( 'error', onError );
	s.on( 'close', onClose );

	s.destroy({
		'message': 'beep'
	});

	function onError( err ) {
		count += 1;
		if ( err ) {
			t.ok( true, err.message );
		} else {
			t.ok( false, 'does not error' );
		}
		if ( count === 2 ) {
			t.end();
		}
	}
	function onClose() {
		count += 1;
		t.ok( true, 'stream closes' );
		if ( count === 2 ) {
			t.end();
		}
	}
});

tape( 'the returned stream provides a method to destroy a stream (error object)', function test( t ) {
	var count = 0;
	var s;

	s = constantStream( 'beep' );

	t.equal( typeof s.destroy, 'function', 'has destroy method' );

	s.on( 'error', onError );
	s.on( 'close', onClose );

	s.destroy( new Error( 'beep' ) );

	function onError( err ) {
		count += 1;
		if ( err ) {
			t.ok( true, err.message );
		} else {
			t.ok( false, 'does not error' );
		}
		if ( count === 2 ) {
			t.end();
		}
	}
	function onClose() {
		count += 1;
		t.ok( true, 'stream closes' );
		if ( count === 2 ) {
			t.end();
		}
	}
});

tape( 'the returned stream does not allow itself to be destroyed more than once', function test( t ) {
	var s;

	s = constantStream( 'beep' );

	s.on( 'error', onError );
	s.on( 'close', onClose );

	// If the stream is closed twice, the test will error...
	s.destroy();
	s.destroy();

	function onClose() {
		t.ok( true, 'stream closes' );
		t.end();
	}
	function onError( err ) {
		t.ok( false, err.message );
	}
});

tape( 'the constructor returns a stream which always streams the same value (string)', function test( t ) {
	var iStream;
	var result;
	var opts;
	var s;

	opts = {
		'iter': 10,
		'sep': '\n'
	};
	s = constantStream( '3.14', opts );
	s.on( 'end', onEnd );

	iStream = inspectStream( inspect );

	result = '';
	s.pipe( iStream );

	function inspect( chunk ) {
		t.equal( isBuffer( chunk ), true, 'returns a buffer' );
		result += chunk.toString();
	}

	function onEnd() {
		var i;

		t.pass( 'stream ended' );

		result = result.split( '\n' );
		t.equal( result.length, 10, 'has expected length' );
		for ( i = 0; i < result.length; i++ ) {
			t.equal( parseFloat( result[ i ] ), 3.14, 'returns expected value. i: ' + i + '.' );
		}
		t.end();
	}
});

tape( 'the constructor returns a stream which always streams the same value (Buffer)', function test( t ) {
	var iStream;
	var result;
	var opts;
	var s;

	opts = {
		'iter': 10,
		'sep': '\n'
	};
	s = constantStream( string2buffer( '3.14' ), opts );
	s.on( 'end', onEnd );

	iStream = inspectStream( inspect );

	result = '';
	s.pipe( iStream );

	function inspect( chunk ) {
		t.equal( isBuffer( chunk ), true, 'returns a buffer' );
		result += chunk.toString();
	}

	function onEnd() {
		var i;

		t.pass( 'stream ended' );

		result = result.split( '\n' );
		t.equal( result.length, 10, 'has expected length' );
		for ( i = 0; i < result.length; i++ ) {
			t.equal( parseFloat( result[ i ] ), 3.14, 'returns expected value. i: ' + i + '.' );
		}
		t.end();
	}
});

tape( 'the constructor returns a stream which always streams the same value (Uint8Array)', function test( t ) {
	var iStream;
	var result;
	var value;
	var opts;
	var s;

	value = string2buffer( '3.14' );
	value = gcopy( value.length, value, 1, new Uint8Array( value.length ), 1 );

	opts = {
		'iter': 10,
		'sep': '\n'
	};
	s = constantStream( value, opts );
	s.on( 'end', onEnd );

	iStream = inspectStream( inspect );

	result = '';
	s.pipe( iStream );

	function inspect( chunk ) {
		t.equal( isBuffer( chunk ), true, 'returns a buffer' );
		result += chunk.toString();
	}

	function onEnd() {
		var i;

		t.pass( 'stream ended' );

		result = result.split( '\n' );
		t.equal( result.length, 10, 'has expected length' );
		for ( i = 0; i < result.length; i++ ) {
			t.equal( parseFloat( result[ i ] ), 3.14, 'returns expected value. i: ' + i + '.' );
		}
		t.end();
	}
});

tape( 'the constructor returns a stream which always streams the same value (object mode)', function test( t ) {
	var iStream;
	var count;
	var value;
	var opts;
	var s;

	value = [ 1, 2, 3, 4 ];
	opts = {
		'objectMode': true
	};
	s = constantStream( value, opts );
	s.on( 'close', onClose );

	opts = {
		'objectMode': true
	};
	iStream = inspectStream( opts, inspect );

	count = 0;
	s.pipe( iStream );

	function inspect( v ) {
		count += 1;
		t.equal( v, value, 'returns expected value. i: '+count+'.' );
		if ( count >= 10 ) {
			s.destroy();
		}
	}

	function onClose() {
		t.pass( 'stream closed' );
		t.end();
	}
});

tape( 'the constructor supports limiting the number of iterations', function test( t ) {
	var iStream;
	var count;
	var niter;
	var opts;
	var s;

	niter = 10;
	count = 0;

	opts = {
		'iter': niter,
		'objectMode': true
	};
	s = constantStream( 3.14, opts );
	s.on( 'end', onEnd );

	opts = {
		'objectMode': true
	};
	iStream = inspectStream( opts, inspect );

	s.pipe( iStream );

	function inspect( v ) {
		count += 1;
		t.equal( v, 3.14, 'returns expected value' );
	}

	function onEnd() {
		t.equal( count === niter, true, 'performs expected number of iterations' );
		t.end();
	}
});

tape( 'by default, the constructor generates newline-delimited values', function test( t ) {
	var iStream;
	var result;
	var value;
	var opts;
	var s;

	value = '{"beep":"boop"}';
	opts = {
		'iter': 10
	};
	s = constantStream( value, opts );
	s.on( 'end', onEnd );

	iStream = inspectStream( inspect );

	result = '';
	s.pipe( iStream );

	function inspect( chunk ) {
		result += chunk.toString();
	}

	function onEnd() {
		var i;

		result = result.split( '\n' );
		t.equal( result.length, opts.iter, 'has expected length' );
		for ( i = 0; i < result.length; i++ ) {
			t.equal( result[ i ], value, 'returns expected value' );
		}
		t.end();
	}
});

tape( 'the constructor supports providing a custom separator for streamed values', function test( t ) {
	var iStream;
	var result;
	var opts;
	var s;

	opts = {
		'iter': 10,
		'sep': '--++--'
	};
	s = constantStream( '3.14', opts );
	s.on( 'end', onEnd );

	iStream = inspectStream( inspect );

	result = '';
	s.pipe( iStream );

	function inspect( chunk ) {
		result += chunk.toString();
	}

	function onEnd() {
		var i;

		result = result.split( opts.sep );
		t.equal( result.length, opts.iter, 'has expected length' );
		for ( i = 0; i < result.length; i++ ) {
			t.equal( result[ i ], '3.14', 'returns expected value' );
		}
		t.end();
	}
});
