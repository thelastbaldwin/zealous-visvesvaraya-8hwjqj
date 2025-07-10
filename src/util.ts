export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// creates the color from red to green based on the standard deviation value
// value must be between -2 and 2, where -2 is red, 0 is white, and 2 is green
// if the value is outside this range, it throws an error
// returns a hex color string
export function getSDColor(value: number): string {
  if (value === 0) {
    return "#ffffff";
  }

  if (value < -2 || value > 2) {
    throw new Error("Value must be between -2 and 2");
  }

  const red = clamp(Math.round(255 * (1 - Math.abs(value) / 2)), 0, 255);
  const green = clamp(Math.round(255 * (1 + value / 2)), 0, 255);

  return `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}00`;
}
