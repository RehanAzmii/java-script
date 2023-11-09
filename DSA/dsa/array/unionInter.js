// function findUnionAndIntersection(arr1, arr2) {
//   // Find the union
//   const union = [...new Set([...arr1, ...arr2])];

//   // Find the intersection
//   const intersection = arr1.filter((element) => arr2.includes(element));

//   return { union, intersection };
// }

// const arr1 = [2, 5, 6];
// const arr2 = [4, 6, 8, 10];

// const { union, intersection } = findUnionAndIntersection(arr1, arr2);

// console.log("Union: ", union);
// console.log("Intersection: ", intersection);

function findUnionAndIntersection(arr1, arr2) {
  // Initialize empty arrays for union and intersection
  let union = [];
  let intersection = [];

  // Calculate the union
  for (let i = 0; i < arr1.length; i++) {
    if (!union.includes(arr1[i])) {
      union.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!union.includes(arr2[i])) {
      union.push(arr2[i]);
    }
  }

  // Calculate the intersection
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }

  return { union, intersection };
}

const arr1 = [2, 5, 6];
const arr2 = [4, 6, 8, 10];

const { union, intersection } = findUnionAndIntersection(arr1, arr2);

console.log("Union: ", union);
console.log("Intersection: ", intersection);
