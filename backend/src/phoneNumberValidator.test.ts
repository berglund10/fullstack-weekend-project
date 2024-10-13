import { deepEqual } from "node:assert/strict";
import test from "node:test";
import { validateMobileNumber } from "./phoneNumberValidator";

test("empty mobile number should return false", () => {
  const result = validateMobileNumber("");
  deepEqual(result, false);
});

test("should return false for a too short mobile number", () => {
  const result = validateMobileNumber("073400");
  deepEqual(result, false);
});

test("should return false for a too long mobile number", () => {
  const result = validateMobileNumber("0734001337123123");
  deepEqual(result, false);
});

test("should return false for incomplete mobile number format", () => {
  const result = validateMobileNumber("0784002141");
  deepEqual(result, false);
});

test("should return false if mobile number contains letters", () => {
  const result = validateMobileNumber("073abc");
  deepEqual(result, false);
});

test("should return true for 0046 format", () => {
  const result = validateMobileNumber("0046704778899");
  deepEqual(result, true);
});

test("should return false for 0047 format", () => {
  const result = validateMobileNumber("0047704778899");
  deepEqual(result, false);
});

test("should return true for +46 format", () => {
  const result = validateMobileNumber("+46704778899");
  deepEqual(result, true);
});

test("should return true for 070/072/073/076/079", () => {
  const result = validateMobileNumber("0714778899");
  deepEqual(result, false);
});

test("should allow spaces in mobile number", () => {
  const result = validateMobileNumber("070 477 88 99");
  deepEqual(result, true);
});

test("the first number should be 0", () => {
  const result = validateMobileNumber("1734002141");
  deepEqual(result, false);
});

test("the second number should be 7", () => {
  const result = validateMobileNumber("0834002141");
  deepEqual(result, false);
});
