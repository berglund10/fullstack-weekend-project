export function validateNumber(mobilePhoneNumber: string) {
  if (mobilePhoneNumber.length === 0) {
    return false;
  }
  if(mobilePhoneNumber.length < 10) {
    return false;
  }
  if(mobilePhoneNumber.length > 10) {
    return false;
  }
  return true;
}
