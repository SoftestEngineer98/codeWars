function getSumOfDigits(integer) {
  return Array.from(String(integer), Number).reduce((a,b) => a + b)
}

// Go over again...