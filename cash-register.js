function checkCashRegister(price, cash, cid) {
  let change = Math.round((cash - price) * 100);
  const currency = [
    ["PENNY", 1],
    ["NICKEL", 5],
    ["DIME", 10],
    ["QUARTER", 25],
    ["ONE", 100],
    ["FIVE", 500],
    ["TEN", 1000],
    ["TWENTY", 2000],
    ["ONE HUNDRED", 10000],
  ];

  // {"PENNY": 0.1, "NICKEL": 0.5, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100}
  let registerStatus = { status: "", change: [] };
  let currentChangeTotal = currentCashInDrawer(cid);
  let cidObject = {};
  cid.forEach((item) => (cidObject[item[0]] = item[1] * 100));
  let changeArray = [];

  // CHECKING THE DIFFERENT SITUATIONS:

  // if we don't have enough money
  if (currentChangeTotal < change) {
    registerStatus.status = "INSUFFICIENT_FUNDS";
    registerStatus.change = [];
  }

  // if we have enough money but don't have matching change (and so the changeArray is empty)
  if (changeArray.length === 0 && currentChangeTotal > change) {
    registerStatus.status = "INSUFFICIENT_FUNDS";
    registerStatus.change = [];
  }

  // if we are out of money after this
  if (currentChangeTotal === change) {
    registerStatus.status = "CLOSED";
    registerStatus.change = cid;
    return registerStatus;
  }

  // we want to check the change against everything in the CID, so we need a stopper for the while loop
  let stopper = currency.length - 1;
  let changeToGive = {};
  while (stopper >= 0) {
    let currencyValue = currency[stopper][1];
    let currencyName = currency[stopper][0];
    // we want to find the matching coin, which cannot be bigger than the change
    if ((change > currencyValue && cidObject[currencyName], change)) {
      changeToGive[currencyName] = 0;
      // the cash in drawer item needs to be bigger than the change for us to hand it out
      while (cidObject[currencyName] > 0 && change - currencyValue >= 0) {
        // every time we hand out a coin, the amount in the drawer and the change we owe decreases

        cidObject[currencyName] -= currencyValue;
        change -= currencyValue;
        // the amount we give back increases with every coin
        changeToGive[currencyName] += currencyValue / 100;
      }
    }
    stopper -= 1;
  }

  console.log("change is " + change);
  // creating the changeArray from the changeToGive Object, but only if we are able to pay back the right amount with the cash we have in the drawer
  if (change === 0) {
    Object.entries(changeToGive).map((item) => {
      if (item[1] != 0) {
        changeArray.push(item);
      }
    });
  }

  // LAST SCENARIO:
  // if all is well
  if (currentChangeTotal > change && changeArray.length > 0) {
    registerStatus.status = "OPEN";
    registerStatus.change = changeArray;
  }

  function currentCashInDrawer(cid) {
    let total = 0;
    for (let amount in cid) {
      total += cid[amount][1] * 100;
    }
    return total;
  }

  return registerStatus;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
