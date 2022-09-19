let stack1 = [];
let stack2 = [];
function enqueue(x) {
  //if dequeue was called before, all the elements would be in stack2, so to maintain the order
  //push elements into stack1 before performing the actual enqueue operation
  if (stack2.length > 0) {
    let len = stack2.length;
    for (let i = 0; i < len; i++) {
      let p = stack2.pop();
      stack1.push(p);
    }
  }
  stack1.push(x);
}
function dequeue(x) {
  // if dequeue was called consecutively, all the elements would be in stack2
  if (stack2.length > 0) {
    stack2.pop();
  }
  // if enqueue was called right before this dequeue, stack2 is empty
  else if (stack2.length === 0) {
    if (stack1.length === 0) {
      // if the first operation is dequeue itself
      return 'Queue is empty';
    } else if (stack1.length === 1) {
      // if a single operation as enqueue was performed
      return stack1.pop();
    }
    // if enqueue was called before this operation, all the elements are in stack1,
    // so pop them and push the elements into stack2,  then pop()
    else if (stack1.length > 0) {
      let len = stack1.length;
      for (let i = 0; i < len; i++) {
        let p = stack1.pop();
        stack2.push(p);
      }
      return stack2.pop();
    }
  }
}
