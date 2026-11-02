//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, queue) => {
  const lastTwoDigits = queue % 100;
  const lastDigit = queue % 10;
  let rankSuffix = "th";

  if (lastTwoDigits < 11 || lastTwoDigits > 19) {
    switch (lastDigit) {
    case 1:
      rankSuffix = "st";
      break;
    case 2:
      rankSuffix = "nd";
      break;
    case 3:
      rankSuffix = "rd";
      break;
    default:
      rankSuffix = "th";
      break;
    }
  }
  
  return `${name}, you are the ${queue}${rankSuffix} customer we serve today. Thank you!`;
}
