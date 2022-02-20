//DNA Pairing
    
function pairElement(str) {
    let result = [];
      for (let index = 0; index < str.length; index +=1) {
        if (str[index] === "G") {
          result.push(["G","C"]);
        } else if (str[index] === "C"){
          result.push(["C","G"]);
        } else if (str[index] === "T"){
          result.push(["T","A"]);
        } else if (str[index] === "A"){
          result.push(["A","T"]);
        } else return str;
      } return result;
    }

  console.log(pairElement("CTCTA"))
