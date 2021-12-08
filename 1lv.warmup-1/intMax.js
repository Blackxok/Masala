// Warmup-1 -- intMax
// Given three int values, a b c, return the largest.

// Examples

// intMax(1, 2, 3) → 3
// intMax(1, 3, 2) → 3
// intMax(3, 2, 1) → 3

if (a > b & a > c) {
  return a;
  } else if (b > a & b > c) {
  return b;
  } else {
  return c;
  }
  }