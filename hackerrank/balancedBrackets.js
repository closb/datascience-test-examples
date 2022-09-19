function balancedBrackets(str) {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (pairs[char]) {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      const last = stack.pop();
      if (pairs[last] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function isBalanced(s) {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (pairs[char]) {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      const last = stack.pop();
      if (pairs[last] !== char) {
        return 'NO';
      }
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
}
