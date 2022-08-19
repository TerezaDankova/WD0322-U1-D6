
/*

Spaghetti alla Carbonara Recipe:

Ingredients for 4 persons:
          spaghetti 400g,
          guanciale 250g,
          very fresh egg yolks 6,
          aged grated Pecorino Romano cheese 50g,
          raw black pepper 4g

To make classic carbonara: 
1. First cut the guanciale into 1cm layers, then into long strips.
2. Combine the egg yolks with the finely grated Pecorino Romano.
3. Roast the black pepper on a pan until it smokes and sizzles, 
   and combine a small amount of it to the yolks and chees mixture, set aside the rest.
4. Brown the strips of guanciale for 3 minutes at medium heat, then 1 minune on high heat til crisp, 
   then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down.
5. Cook the pasta with a pinch of salt in the water (guanciale is already very salty);
   set aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente.
6. Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat:
   this will create a creamy sauce with the pasta starch contained in that water.
7. TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix together.
8. Add the yolk and cheese mixture, stirring rapidly. In the warm pan with the hot pasta, the eggs will cook gently and become creamy.
   It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs.
9. Add the remaining roasted black pepper and serve immediately.

*/

let recepiName = "Spaghetti alla Carbonara"

let spaghetti = 400;
let guanciale = 250;
let eggYolks = 6;
let pecorinoRomano = 50;
let blackPepper = 4;
let water = 4000;
let salt = 15;

console.log("Spaghetti: " + spaghetti);
console.log("Guanciale: " + guanciale);
console.log("Egg Yolks: " + eggYolks);
console.log("Pecorino Romano" + pecorinoRomano);
console.log("Black Pepper: " + blackPepper);


// taking a pinch (1g) from whatever amount blackPepper is at the time
let pinchOfBlackPepper = blackPepper - 1;
// removing a pinch from blackPepper amount
blackPepper -= 1;

let eggsAndCheese = eggYolks + pecorinoRomano;
console.log("\nINCORPORATED EGG YOLKS AND PECORINO: ", eggsAndCheese);

let rawEggSauce = eggsAndCheese + pinchOfBlackPepper;
console.log("\nADDED A PINCH OF PEPPER: ", rawEggSauce);

// cooking the spaghetti
let bowl = water + salt;
console.log("\nBOILING THE WATER WITH A LITTLE SALT: ", bowl);

bowl += spaghetti;
console.log("\nDROPPING SPAGHETTI IN THE WATER: ", bowl);

let pastaWater = 350 + 2; // we are taking just 350ml of water and a bit of salt dissolved in it
console.log("\nSETTING ASIDE A LITTLE BIT OF STARCHY, SALTY, PASTA WATER: ", pastaWater);

bowl -= pastaWater; // updating pot quantity by removing the cup of water we set aside
salt -= 2; // updating salt quantity with the amount removed with the pastaWater

let absorbingRate = 1.8; // pasta will absorb 117% of its weight on average

let absorbedWater = spaghetti * absorbingRate; // the amount of water that will be incorporated with the pasta

let drainedWater = water - pastaWater - absorbedWater; // the amount of water that will be drained from the pot

let cookedSpaghetti = bowl - drainedWater - salt; // draining the cooked spaghetti

console.log("\nSPAGHETTI ARE READY: ", cookedSpaghetti);

let fryPan = guanciale + pastaWater; // creating the cream with pasta starch in the pasta water
console.log("\nCREATING THE SAUCE WITH GUANCIALE AND PASTA WATER: ", fryPan);
console.log(blackPepper);

let carbonara = cookedSpaghetti + fryPan + rawEggSauce + blackPepper; // rawEggs will cook with the remaining heat of the pasta and the pan
console.log("\nSERVING CARBONARA: ", carbonara);