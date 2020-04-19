export function CalculateBox(targetArr: [number, number?, number?, number?]): string {
  let resultArr: [number, number, number, number] = [targetArr[0], targetArr[0], targetArr[0], targetArr[0]]

  const CountNull = targetArr.reduce<number>((acc, curr) => { if (!!curr) return acc + 1;  return acc }, 0)

  if (CountNull === 2) {
    targetArr[1] && (resultArr = [targetArr[0], targetArr[1], targetArr[0], targetArr[1]])
  } else if (CountNull === 3) {
    (targetArr[1] && targetArr[2]) && (resultArr = [targetArr[0], targetArr[1], targetArr[2], targetArr[1]])
  } else if (!targetArr[3]) {
    (targetArr[1] && targetArr[2] && targetArr[3]) && (resultArr = [targetArr[0], targetArr[1], targetArr[2], targetArr[3]])
  }
  
  return `${resultArr.toString().replace(/,/gi, 'px ')}px`
}