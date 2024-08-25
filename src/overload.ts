// Royer => [R, o, y, e, r] => string => string[]
// [R, o, y, e, r] ==> Royer => string[] => string

// Overload. It enable the autocomplete for example. It is most used in OPP
function parseStr(input: string): string[];
function parseStr(input: string[]): string;

// You can set the typing of use unknown for be more generic
function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input == 'string') {
    return input.split('');
  }

  return input;
}

const parseToArray = parseStr('Royer');
console.log(parseToArray);

const parseToString = parseStr(['R', 'o', 'y', 'e', 'r']);
console.log(parseToString);
