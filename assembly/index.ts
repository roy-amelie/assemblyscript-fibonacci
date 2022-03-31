export function listFibonacci(num: i32): Uint32Array {
  let fibonacciList = new Uint32Array(num);
  fibonacciList[0] = 0;
  fibonacciList[1] = 1;

  for (let i = 2; i < num; i++) {
    console.log(fibonacciList.toString());
    fibonacciList[i] = fibonacciList[i - 1] + fibonacciList[i - 2];
  }

  return fibonacciList;
}
