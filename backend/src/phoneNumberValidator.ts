export function validateNumber(mobilePhoneNumber: string) {
  if (mobilePhoneNumber.length === 0) {
    return false;
  }
  return true;
}

