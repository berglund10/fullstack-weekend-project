import { deepEqual } from "node:assert/strict";
import test from "node:test";
import { validateNumber } from "./phoneNumberValidator";

test("empty mobile number should return false", () => {
    const result = validateNumber("");
    deepEqual(result, false);
})

test("should return false for a too short mobile number", () => {
    const result = validateNumber("073400");
    deepEqual(result, false);
})

test("should return false for a too long mobile number", () => {
    const result = validateNumber("0734001337123123");
    deepEqual(result, false);
})

test("should return false for incomplete mobile number format", () => {
    const result = validateNumber("0784002141");
    deepEqual(result, false);
})

test.skip("should return false if mobile number contains letters", () => {
    const result = validateNumber("073abc");
    deepEqual(result, false);
})

test.skip("should return true for 0046 format", () => {
    const result = validateNumber("0046704778899");
    deepEqual(result, true);
})

test.skip("should return true for +46 format", () => {
    const result = validateNumber("+46704778899")
    deepEqual(result, true);
})

test.skip("should return true for 070/072/073/076/079", () => {
    const result = validateNumber("0704778899");
    deepEqual(result, true);
})

test.skip("should allow spaces in mobile number", () => {
    const result = validateNumber("070 477 88 99");
    deepEqual(result, true);
})

