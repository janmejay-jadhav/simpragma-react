let dna1 = "ATAGTACCAC";
let dna2 = "CTTATTGGGT";
// let dna1 = "ACGT";
// let dna2 = "ACGT";
// let dna1 = "ACGT";
// let dna2 = "TGCA";

function minReplaces(dna1, dna2) {
  let str1 = dna1.split("");
  let str2 = dna2.split("");

  let iterationCount = 0;

  if(str1.length <=50)
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === "A" && str2[i] === "A") {
      str1[i] = "T";
      iterationCount++;
    } else if (str1[i] === "A" && str2[i] === "C") {
      str1[i] = "G";
      iterationCount++;
    } else if (str1[i] === "C" && str2[i] === "A") {
      str1[i] = "T";
      iterationCount++;
    }
    if (str1[i] === "T" && str2[i] === "T") {
      str1[i] = "A";
      iterationCount++;
    } else if (str1[i] === "T" && str2[i] === "C") {
      str1[i] = "G";
      iterationCount++;
    } else if (str1[i] === "C" && str2[i] === "T") {
      str1[i] = "A";
      iterationCount++;
    }
    if (str1[i] === "C" && str2[i] === "C") {
      str1[i] = "G";
      iterationCount++;
    } else if (str1[i] === "G" && str2[i] === "A") {
      str1[i] = "T";
      iterationCount++;
    } else if (str1[i] === "A" && str2[i] === "G") {
      str1[i] = "C";
      iterationCount++;
    }
    if (str1[i] === "G" && str2[i] === "G") {
      str1[i] = "C";
      iterationCount++;
    } else if (str1[i] === "G" && str2[i] === "T") {
      str1[i] = "A";
      iterationCount++;
    } else if (str1[i] === "T" && str2[i] === "G") {
      str1[i] = "C";
      iterationCount++;
    }
  }
  return iterationCount;
}

console.log("replacement count", minReplaces(dna1, dna2));
