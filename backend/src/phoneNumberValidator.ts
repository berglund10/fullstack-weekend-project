export function validateNumber(mobilePhoneNumber: string) {
  const fMobilePhoneNumber = formatNumber(mobilePhoneNumber);

  if (fMobilePhoneNumber.length === 0) {
    return false;
  }
  if (fMobilePhoneNumber.length < 10) {
    return false;
  }
  if (fMobilePhoneNumber.length > 10) {
    return false;
  }

  if (!["0", "2", "3", "6", "9"].includes(fMobilePhoneNumber[2])) {
    return false;
  }

  for (let i = 0; i < fMobilePhoneNumber.length; i++) {
    if (isNaN(Number(fMobilePhoneNumber[i]))) {
      return false;
    }
  }

  return true;
}

function formatNumber(mobilePhoneNumber: string) {

    while (mobilePhoneNumber.includes(" ")) {
        mobilePhoneNumber = mobilePhoneNumber.replace(" ", "");
      }

  if (
    mobilePhoneNumber[0] === "0" &&
    mobilePhoneNumber[1] === "0" &&
    mobilePhoneNumber[2] === "4" &&
    mobilePhoneNumber[3] === "6"
  ) {
    return mobilePhoneNumber.replace("0046", "0");
  }

  if (
    mobilePhoneNumber[0] === "+" &&
    mobilePhoneNumber[1] === "4" &&
    mobilePhoneNumber[2] === "6"
  ) {
    return mobilePhoneNumber.replace("+46", "0");
  }

  return mobilePhoneNumber;
}