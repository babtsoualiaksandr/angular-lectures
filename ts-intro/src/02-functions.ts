function voidType(): void {
  // code without return
  console.log('I am cool function!');
}

function nullvalue(): null {
  return null;
}

function undefinedvalue(): undefined {
  return;
}

//--------------------------------------------------

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 5));
// console.log(add(2, true));
// console.log(add(2, '123'));
// console.log(add(2, {a: 1}));

//--------------------------------------------------

function anyType(): void {
  let a: number = 5;
  // a = '6';

  let b: any = 5;
  b = '6';
}

//--------------------------------------------------

function args(): void {
  function logName(firstName: string, lastName?:string): void {
    console.log(`Name: ${firstName} ${lastName}`);
  }

  // logName();
  logName('a');
  logName('a', 'b');
  // logName('a', 'b', 'c');

  function logAll(first: string, ...other: number[]): void {
    console.log(first);
    other.forEach( (a: number) => console.log(a) );
  }

  logAll('Test', 1, 2, 3, 4, 5);
}

//--------------------------------------------------

function optionalArgs(a: number, b?: number) { /* */ }

optionalArgs(1);
optionalArgs(1, 2);
// optionalArgs(1, 2, 3); // Error

function defaultArgs(a = 1, b = 2) { /* */ }

function objectOrNull(): { [key: string]: string } | null {
  // return null;
  return { a: '1' };
}

const arrow = (a: number, b: number): number => a + b;

defaultArgs();
defaultArgs(1);
defaultArgs(1, 2);
// defaultArgs('1', 2);

//--------------------------------------------------

// Function newer returns, must have unreachable end point
function error(): never {
  throw new Error();
}

function foo(): { name: string, description: string } {
  return {} as any;
}