// function that given an array A of N 

function solution(A) {
    let sumLeft = A[0];
    let sumRight = A.reduceRight(
      (sum, current, i) => (i === 0 ? sum : sum + current),
      0
    );
    let result = getDiff(sumLeft, sumRight);
  
    for (let i = 1; i < A.length - 1; i++) {
      const current = A[i];
  
      sumRight -= current;
      sumLeft += current;
  
      const diff = getDiff(sumLeft, sumRight);
      result = result > diff ? diff : result;
    }
  
    return result;
  }
  
  function getDiff(num1, num2) {
    return Math.abs(num1 - num2);
  }


