export function validateNumber(mobilePhoneNumber: string) {
  if (mobilePhoneNumber.length === 0) {
    return false;
  }
  if (mobilePhoneNumber.length < 10) {
    return false;
  }
  if (mobilePhoneNumber.length > 10) {
    return false;
  }

  if (!["0", "2", "3", "6", "9"].includes(mobilePhoneNumber[2])) {
    return false;
  }

  for(let i = 0; i < mobilePhoneNumber.length; i++) {
    if(isNaN(Number(mobilePhoneNumber[i]))) {
        return false;
    }
  }
  return true;
}
