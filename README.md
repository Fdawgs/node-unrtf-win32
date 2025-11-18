# node-unrtf-win32

[![GitHub release](https://img.shields.io/github/release/Fdawgs/node-unrtf-win32.svg)](https://github.com/Fdawgs/node-unrtf-win32/releases/latest/)
[![npm version](https://img.shields.io/npm/v/node-unrtf-win32)](https://npmjs.com/package/node-unrtf-win32)
[![CI](https://github.com/Fdawgs/node-unrtf-win32/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Fdawgs/node-unrtf-win32/actions/workflows/ci.yml)
[![Coverage status](https://coveralls.io/repos/github/Fdawgs/node-unrtf-win32/badge.svg?branch=main)](https://coveralls.io/github/Fdawgs/node-unrtf-win32?branch=main)
[![code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> 32-bit UnRTF Windows binary

## Overview

This package provides a 32-bit Windows UnRTF binary packaged up into a Node.js module to make it easier to include in Node-based applications.
It is intended for use with the [node-unrtf](https://github.com/Fdawgs/node-unrtf) package but can be used independently.

## Installation

Install using `npm`:

```bash
npm i node-unrtf-win32
```

## Example Usage

```js
const unrtfPath = require("node-unrtf-win32");
console.log(`UnRTF binary path: ${unrtfPath}`);
```

## Contributing

Contributions are welcome, and any help is greatly appreciated!

See [the contributing guide](https://github.com/Fdawgs/.github/blob/main/CONTRIBUTING.md) for details on how to get started.
Please adhere to this project's [Code of Conduct](https://github.com/Fdawgs/.github/blob/main/CODE_OF_CONDUCT.md) when contributing.

## License

`node-unrtf-win32` is licensed under the [GPL-3.0 or later](./LICENSE) license.
