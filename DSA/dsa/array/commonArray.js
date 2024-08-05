const commonFunction = (ar1, ar2, ar3) => {
  // array to stor common elements
  let commonElements = [];
  // iterate through ar1 to find common elements in ar2 and ar3
  for (let ele of ar1) {
    // check current alement exists in ar2 and ar3
    if (ar2.includes(ele) && ar3.includes(ele)) {
      commonElements.push(ele);
    }
  }
  console.log(commonElements);
};

commonFunction(
  [1, 5, 10, 20, 40, 80],
  [6, 7, 20, 80, 100],
  [3, 4, 15, 20, 30, 70, 80]
);
