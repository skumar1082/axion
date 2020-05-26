export function dateToYMD(date: Date): string {
  let strArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let d = date.getDate();
  let m = strArray[date.getMonth()];
  let y = date.getFullYear();
  return '' + m + ' ' + (d <= 9 ? '0' + d : d) + ', ' + y;
}

export function decimalFormat(num: number): number {
  return parseFloat((Math.round(num * 100) / 100).toFixed(2));
}

export function getResolution(): number {
  return window.screen.width;
}
