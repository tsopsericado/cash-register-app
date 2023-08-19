// aAn array that stores all the different notes and coins
const cid = [
    ['PENNY', 0],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ]

  const obj1 = {
    status: 'INSUFFICIENT_FUND',
    change: []
  }
  
  const obj2 = {
    status: 'OPEN',
    change: []
  }
  
  const obj3 = {
    status: 'CLOSED',
    change: []
  }

  function checkCashRegistrer(){
    const a = +document.querySelector('#penny').value
    const b = +document.querySelector('#nickel').value
    const c = +document.querySelector('#dime').value
    const d = +document.querySelector('#quarter').value
    const e = +document.querySelector('#one').value
    const f = +document.querySelector('#five').value
    const g = +document.querySelector('#ten').value
    const h = +document.querySelector('#twenty').value
    const k = +document.querySelector('#hundred').value
    const priceB = +document.querySelector('.bill').value
    const cachN = +document.querySelector('.payment').value

    const change = cachN - priceB
    const cidarr = [a, b, c, d, e, f, g, h, k]
    const wholeBalance = Math.floor(change)
    const decimalBalance = change - Math.floor(balance)
    let whole = 0
    let modolus = 0
    let sum = 0
    let x = 0
    let y = 0
    
    //loooping through the cid array and sum all leaving the sum to two decimal places

    for (let i = 0; i < cidarr.length; i++){
        sum = +(sum + arr[i]).toFixed(2)
    }

    if (sum < balance) {
        document.querySelector('.display').innerHTML = JSON.stringify(obj1)
    }

  }