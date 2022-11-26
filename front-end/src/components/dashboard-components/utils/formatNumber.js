// This component formats the numbers shown on the dashboard.

import React from "react";
import numeral from 'numeral';


// Display the number as it is (i.e., no format)
export function fNumber(number) {
  return numeral(number).format();
}

//
export function fPercent(number) {
  const format = number ? numeral(Number(number) / 100).format('0.0%') : '';

  return result(format, '.0');
}

// Display the number as its shortened version
export function fShortenNumber(number) {
  const format = number ? numeral(number).format('0.00a') : '';

  return result(format, '.00');
}

function result(format, key = '.00') {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, '') : format;
}
