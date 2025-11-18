"use strict";

const { join } = require("node:path");
// eslint-disable-next-line n/no-unsupported-features/node-builtins -- Tests, not in distributed code
const { describe, it } = require("node:test");
const binaryPath = require("./index");

/** @typedef {import('node:test').TestContext} TestContext */

describe("binaryPath", () => {
	it("Points to the correct unrtf binary directory", (/** @type {TestContext} */ t) => {
		t.plan(1);
		const expectedSuffix = join("lib", "unrtf-0.19.3", "bin");
		t.assert.strictEqual(binaryPath.endsWith(expectedSuffix), true);
	});
});
