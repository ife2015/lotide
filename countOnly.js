const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍😍😍 Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🤮🤮🤮🤮🤮 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
   if (itemsToCount[item]) {
    if(results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1; 
    }
  }
  }

  return results; 
}



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const results1 = countOnly(firstNames ,{ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(results1["Jason"], 1);
assertEqual(results1["Karima"], undefined);
assertEqual(results1["Fang"], 2);
assertEqual(results1["Agouhanna"], undefined);