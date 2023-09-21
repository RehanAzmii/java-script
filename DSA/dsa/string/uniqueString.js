//find unique string

const findUniqueString = (str) => {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!newString.includes(char)) {
      newString += char;
    }
  }
  console.log(newString);
};

let string = "appleerehhhttgg";
findUniqueString(string);
