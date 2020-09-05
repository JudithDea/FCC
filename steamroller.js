function steamrollArray(arr) {
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    // pop value from stack until stack is empty
    const next = stack.pop();
    // store the values we took out of the stack in the next variable
    if (Array.isArray(next)) {
      // skip array items until next iteration
      stack.push(...next);
    } else {
      result.push(next);
    }
  }

  return result.reverse();
  // reverse to restore input order
}

steamrollArray([1, [2], [3, [[4]]]]);
