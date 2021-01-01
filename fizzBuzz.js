module.exports = {
  fizzBuzz: num => {
    if (num % 15 == 0) return "Fizz Buzz";
    if (num % 5 == 0) return "Buzz";
    if (num % 3 == 0) return "Fizz";
    return num.toString();
  },
  /**
   * @param - firstReduction - this is the first reduction applied to the initial price
   */
  twoReduction: (price, firstReduction, secondReduction) => {
    if (
      secondReduction <= firstReduction ||
      (firstReduction == 0 && secondReduction == 0)
    ) {
      let finalPrice = price * (1 - firstReduction / 100);
      return (finalPrice *= 1 - secondReduction / 100);
    }
    return "L'ordre des réductions n'est pas exacte.";
  },

  cashBack: (price, payment) => {
    // initialisation des variables
    let result = "";
    let cashback = parseFloat(payment - price).toPrecision(1);
    const cashList = {
      10: " bill oF 10 euros",
      5: " bill oF 5 euros",
      2: " coins of 2 euros",
      1: " coins of 1 euros",
      0.5: " coins of 50 cents",
      0.2: " coins of 20 cents",
      0.1: " coins of 10 cents",
      0.05: "coin(s) of 0.05€",
      0.02: "coin(s) of 0.02€",
      0.01: "coin(s) of 0.01€",
    };

    if (price === payment) {
      result = "and i will give back nothing";
    } else {
      // construction de la string

      result = `and i will cash back ${
        (cashback * 100) / 100
      }€, you will receive `;

      for (const key in cashList) {
        let coinQuantity = (cashback - (cashback % key)) / key;
        if (cashback >= parseFloat(key) && cashback !== 0) {
          result += `${coinQuantity} ${cashList[key]}`;
          cashback = ((cashback * 100) % (key * 100)) / 100;
        }
        if (cashback && coinQuantity) {
          result += ", ";
        }
      }

      //
    }
    return `the price is ${price}€ ${result}`;
  },
};
