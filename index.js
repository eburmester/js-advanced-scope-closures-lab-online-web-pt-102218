function produceDrivingRange(blockRange) {
  return function (block1, block2) {
    let range = parseInt(block2) - parseInt(block1)

    if (range < blockRange) {
      return `within range by ${blockRange - range}`
    } else {
      return `${range - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(total) {
    return total * tipPercent
  }
}

function createDriver(driverID) {
  return function(driver) {
    return driverID + driver 
  }
}