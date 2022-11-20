import React from "react";
import Prototype from "../components/prototype.js";
const sum = require('../components/prototype.js');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
