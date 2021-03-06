<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Constant Stream

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a [readable stream][readable-stream] which always streams the same value.

<section class="installation">

## Installation

```bash
npm install @stdlib/streams-node-from-constant
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var constantStream = require( '@stdlib/streams-node-from-constant' );
```

<a name="constant-stream"></a>

#### constantStream( value\[, options] )

Returns a [readable stream][readable-stream] which **always** streams the **same** `value`.

```javascript
var inspectStream = require( '@stdlib/streams-node-inspect-sink' );

var iStream;
var stream;

function log( chunk, i ) {
    console.log( chunk.toString() );
    if ( i === 10 ) {
        stream.destroy();
    }
}

stream = constantStream( 'beep' );
iStream = inspectStream( log );

stream.pipe( iStream );
```

The function accepts the following `options`:

-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.
-   **encoding**: specifies how `Buffer` objects should be decoded to `strings`. Default: `null`.
-   **highWaterMark**: specifies the maximum number of bytes to store in an internal buffer before pausing streaming.
-   **sep**: separator used to join streamed data. This option is only applicable when a stream is **not** in [objectMode][object-mode]. Default: `'\n'`.
-   **iter**: number of iterations.

To set [stream][stream] `options`,

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var stream = constantStream( 'beep', opts );
```

By default, the function returns a [stream][stream] which streams an infinite number of values (i.e., the [stream][stream] will **never** end). To limit the number of streamed values, set the `iter` option.

```javascript
var inspectStream = require( '@stdlib/streams-node-inspect-sink' );

function log( chunk ) {
    console.log( chunk.toString() );
}

var opts = {
    'iter': 10
};

var stream = constantStream( 'beep', opts );
var iStream = inspectStream( log );

stream.pipe( iStream );
```

By default, when not operating in [objectMode][object-mode], a returned [stream][stream] delineates streamed values using a newline character. To specify an alternative separator, set the `sep` option.

```javascript
var inspectStream = require( '@stdlib/streams-node-inspect-sink' );

function log( chunk ) {
    console.log( chunk.toString() );
}

var opts = {
    'iter': 10,
    'sep': ','
};

var stream = constantStream( 'beep', opts );
var iStream = inspectStream( log );

stream.pipe( iStream );
```

* * *

#### constantStream.factory( \[value, ]\[options] )

Returns a `function` for creating [readable streams][readable-stream] which **always** stream the **same** provided `value`.

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var createStream = constantStream.factory( opts );
```

If provided a `value` to stream, the returned function returns [readable streams][readable-stream] which **always** stream the **same** `value`.

```javascript
var createStream = constantStream.factory( 'beep' );

var stream1 = createStream();
var stream2 = createStream();
// ...
```

If not provided a `value` to stream, the returned function requires that a `value` be provided at each invocation.

```javascript
var createStream = constantStream.factory();

var stream1 = createStream( 'beep' );
var stream2 = createStream( 'boop' );
// ...
```

The method accepts the same `options` as [`constantStream()`](#constant-stream).

* * *

#### constantStream.objectMode( value\[, options] )

This method is a convenience function to create [streams][stream] which **always** operate in [objectMode][object-mode].

```javascript
var inspectStream = require( '@stdlib/streams-node-inspect-sink' );

function log( v ) {
    console.log( v );
}

var value = {
    'beep': 'boop'
};
var opts = {
    'iter': 10
};
var stream = constantStream.objectMode( value, opts );

opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

This method accepts the same `options` as [`constantStream()`](#constant-stream); however, the method will **always** override the [`objectMode`][object-mode] option in `options`.

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   In binary mode, a provided `value` must be a `string`, `Buffer`, or `Uint8Array`.
-   In [`objectMode`][object-mode], `null` is a reserved value. If provided `null`, the returned [stream][stream] will prematurely end.
-   If provided an `object` reference, the `value` is **not** copied. To avoid unwanted mutation, copy the `value` **before** creating a [stream][stream].
-   In older Node.js environments, `Uint8Array` contents may be copied to a new `Buffer` object due to changes in the underlying Node.js APIs.
-   If the `factory` method is provided only one argument and that argument is an `object` (either empty or not containing any recognized `options` properties), the method treats the argument as a value to be streamed, **not** as an `options` argument.

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
var constantStream = require( '@stdlib/streams-node-from-constant' );

function log( v ) {
    console.log( v.toString() );
}

var opts = {
    'objectMode': true,
    'iter': 10
};

var stream = constantStream( 3.14, opts );

opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/streams-node-from-constant
```

</section>
<!-- CLI usage documentation. -->


<section class="usage">

### Usage

```text
Usage: constant-stream [options] <value>

Options:

  -h,  --help               Print this message.
  -V,  --version            Print the package version.
       --sep sep            Separator used to join streamed data. Default: '\n'.
  -n,  --iter iterations    Number of iterations.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   In accordance with POSIX convention, a trailing newline is **always** appended to generated output prior to exit.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ constant-stream 'beep' -n 10
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/streams/node/from-array`][@stdlib/streams/node/from-array]</span><span class="delimiter">: </span><span class="description">create a readable stream from an array-like object.</span>
-   <span class="package-name">[`@stdlib/streams/node/from-iterator`][@stdlib/streams/node/from-iterator]</span><span class="delimiter">: </span><span class="description">create a readable stream from an iterator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/streams-node-from-constant.svg
[npm-url]: https://npmjs.org/package/@stdlib/streams-node-from-constant

[test-image]: https://github.com/stdlib-js/streams-node-from-constant/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/streams-node-from-constant/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/streams-node-from-constant/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/streams-node-from-constant?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/streams-node-from-constant.svg
[dependencies-url]: https://david-dm.org/stdlib-js/streams-node-from-constant/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/streams-node-from-constant/tree/deno
[umd-url]: https://github.com/stdlib-js/streams-node-from-constant/tree/umd
[esm-url]: https://github.com/stdlib-js/streams-node-from-constant/tree/esm
[branches-url]: https://github.com/stdlib-js/streams-node-from-constant/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/streams-node-from-constant/main/LICENSE

[stream]: https://nodejs.org/api/stream.html

[object-mode]: https://nodejs.org/api/stream.html#stream_object_mode

[readable-stream]: https://nodejs.org/api/stream.html

<!-- <related-links> -->

[@stdlib/streams/node/from-array]: https://github.com/stdlib-js/streams-node-from-array

[@stdlib/streams/node/from-iterator]: https://github.com/stdlib-js/streams-node-from-iterator

<!-- </related-links> -->

</section>

<!-- /.links -->
