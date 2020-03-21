const raining = true;
const cold = true;

if (raining) {
  console.log("N'oublie pas ton parapluie!");
}

if (cold) {
  console.log("N'oublie pas ton foulard!");
}

// deuxième version avec conditionnelle

if (cold) {
    console.log("Il fera vraiment froid!");
  } else {
    console.log("Chandail a manches courtes!");
  }
  

console.log("Tu peux maintenant sortir!");




//Troisième version avec plus de conditions Else if

const temperature = 20;

if (temperature < 0) {
    console.log("Make sure you pick out a scarf!");
  } else if (temperature < 15) {
    console.log("Short sleeves won't cut it!");
  } else {
    console.log("Short sleeves are fine.");
  }
  
  console.log("Now you're ready to go outside!");
  