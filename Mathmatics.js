// Return random float between minV and maxV
function RandomInRange(minV, maxV) {
  var num = Math.random();
  return Remap(num, 0, 1, minV, maxV);
}

// Remap x from the range (in_min to in_max) to the range (out_min, out_max)
function Remap(x, in_min, in_max, out_min, out_max) {
  return out_min + (out_max - out_min) * ((x - in_min) / (in_max - in_min));
}

// Limit x to always be between in_min and in_max (including the limits)
function Clamp(x, in_min, in_max) {
  return Math.min(Math.max(x, in_min), in_max)
}

// Linearly interpolate between a and b by the value t (not clamped)
function Lerp(a, b, t) {
  return a + (b - a) * t;
}

// Wraps x in the range between a and b, including a and b
function Wrap(x, a, b) {
  while(x < a) {
    x += b - a;
  }
  while(x > b) {
    x -= b -a;
  }
  return x;
}