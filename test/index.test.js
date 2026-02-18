/* eslint-disable security/detect-non-literal-fs-filename -- Test files are not user-provided */

/**
 * Copyright (C) 2025-present Frazer Smith <frazer.dev@icloud.com>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

"use strict";

const { stat } = require("node:fs/promises");
// eslint-disable-next-line n/no-unsupported-features/node-builtins -- Tests, not in distributed code
const { describe, it } = require("node:test");
const binaryPath = require("../src/index");

/** @typedef {import('node:test').TestContext} TestContext */

describe("node-unrtf-win32 export", () => {
	it("Returns the correct Unrtf binary directory", async (/** @type {TestContext} */ t) => {
		t.plan(1);
		const stats = await stat(binaryPath);
		t.assert.strictEqual(stats.isDirectory(), true);
	});
});
