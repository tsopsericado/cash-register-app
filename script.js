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

    const balance = cachN - priceB
    const cidarr = [a, b, c, d, e, f, g, h, k]
    const wholeBalance = Math.floor(balance)
    const decimalBalance = balance - Math.floor(balance)
    let whole = 0
    let modolus = 0
    let sum = 0
    let x = 0
    let y = 0
    
    //loooping through the cid array and sum all leaving the sum to two decimal places

    for (let i = 0; i < cidarr.length; i++){
        sum = +(sum + cidarr[i]).toFixed(2)
    }

    if (sum < balance) {
        document.querySelector('.display').innerHTML = JSON.stringify(obj1)
    } else if (sum === balance ) {
        obj3.change = cid
        document.querySelector('.display').innerHTML = JSON.stringify(obj3)
    } else if(balance < 0){
      document.querySelector('.negative').innerHTML = 'payment can not be greater than bill' 
    }else { 
        if (cidarr[7] !== 0) {
            whole = Math.floor(wholeBalance / 20)
            modolus = wholeBalance % 20
            x = whole * 20 //gives us the 20 bank note for change

            // test if the number of 20 notes is available in the cid

            if ( x >= cidarr[7]) {
                y = x - cidarr[7]
                cidarr[7] = x - y //update the cid variable with all its available
                
            }else{
                y = cidarr[7] - x
                cidarr[7] -= y
            }
        }

        cid[7][1] = cidarr[7]
        obj2.change.push(cid[7])
        if (cidarr[6] !== 0 && cidarr[7] === 0) {
          whole = Math.floor(wholeBalance / 10)
          modolus = wholeBalance % 10
          x = whole * 10
          if (x >= r[6]) {
            y = x - cidarr[6]
            cidarr[6] = x - y
          } else {
            y = cidarr[6] - x
            cidarr[6] -= y
          }
        } else if (cidarr[6] !== 0) {
          // in case the number of twenty in the cid < what is needed, we handle the difference
          if (x > cidarr[7]) {
            whole = Math.floor((y + modolus) / 10)
          } else {
            whole = Math.floor(modolus / 10)
          }
          modolus = modolus % 10
          x = whole * 10
          // test if the amount needed is greater that the available
          if (x >= cidarr[6]) {
            y = x - cidarr[6]
            cidarr[6] = x - y
          } else {
            y = cidarr[6] - x
            cidarr[6] -= y
          }
        }

        cid[6][1] = cidarr[6]
    obj2.change.push(cid[6])

    // test if value of key "five" and "ten" are not 0 otherwise we push directly to "cahnge"
    if (cidarr[5] !== 0) {
      if (x > cidarr[6]) {
        whole = Math.floor((modolus + y) / 5)
      } else {
        whole = Math.floor(modolus / 5)
      }
      modolus = modolus % 5
      x = whole * 5
      if (x >= cidarr[5]) {
        y = x - cidarr[5]
        cidarr[5] = x - y
      } else {
        y = cidarr[5] - x
        cidarr[5] -= y
      }
    } else if (cidarr[5] !== 0 && cidarr[6] === 0) {
      whole = Math.floor(wholeBalance / 5)
      modolus = wholeBalance % 5
      x = whole * 5
      if (x >= cidarr[5]) {
        y = x - cidarr[5]
        cidarr[5] = x - y
      } else {
        y = cidarr[5] - x
        cidarr[5] -= y
      }
    }
    cid[5][1] = cidarr[5]
    obj2.change.push(cid[5])

        // test if value of key "one" is not 0 otherwise we push directly to "change"
        if (cidarr[4] !== 0) {
            // test this to ensure that the program clearly remove what is needed
            if (x > cidarr[5]) {
              x = y + modolus
            } else {
              x = modolus
            }
            if (x >= cidarr[4]) {
              y = x - cidarr[4]
              cidarr[4] = x - y
            } else {
              y = cidarr[4] - x
              cidarr[4] -= y
            }
          } else if (cidarr[4] !== 0 && cidarr[5] === 0) {
            whole = Math.floor(wholeBalance / 1)
            modolus = wholeBalance % 1
            x = whole * 1
            if (x >= cidarr[4]) {
              y = x - cidarr[4]
              cidarr[4] = x - y
            } else {
              y = cidarr[4] - x
              cidarr[4] -= y
            }
          }
          cid[4][1] = cidarr[4]
          obj2.change.push(cid[4]) 
         // handeling the decimal part of the diffence btw N & B (balance)
    const dB = decimalBalance * 100 // multiply by 100 to take calculate the modolus and ease calculations
    let dBwhole = 0
    let dBmodolus = 0

    if (cidarr[3] !== 0) {
      dBwhole = Math.floor(dB / 25)
      dBmodolus = dB % 25
      x = (dBwhole * 25) / 100 // divide by 100 to come back to the initial value
      // test if the number of twenty notes we have to give is greater than what is available in the cid
      if (x >= cidarr[3]) {
        y = x - cidarr[3]
        cidarr[3] = x - y
      } else {
        y = cidarr[3] - x
        cidarr[3] -= y
      }
    }
    cid[3][1] = cidarr[3]
    obj2.change.push(cid[3])
    if (cidarr[2] !== 0) {
      if (x > cidarr[3]) {
        dBwhole = Math.floor((y + dBmodolus) / 10)
      } else {
        dBwhole = Math.floor(dBmodolus / 10)
      }
      dBmodolus = dBmodolus % 10
      x = (dBwhole * 10) / 100
      if (x >= cidarr[2]) {
        y = x - cidarr[2]
        cidarr[2] = +(x - y).toFixed(2)
      } else {
        y = cidarr[2] - x
        cidarr[2] = +(cidarr[2] - y).toFixed(2)
      }
    } else if (cidarr[2] !== 0 && cidarr[3] === 0) {
      dBwhole = Math.floor(dB / 10)
      dBmodolus = dB % 10
      x = (dBwhole * 10) / 100
      if (x >= cidarr[2]) {
        y = x - cidarr[2]
        cidarr[2] = +(x - y).toFixed(2)
      } else {
        y = cidarr[2] - x
        cidarr[2] = +(cidarr[2] - y).toFixed(2)
      }
    }
    cid[2][1] = cidarr[2]
    obj2.change.push(cid[2])

    if (cidarr[1] !== 0) {
      if (x > cidarr[2]) {
        dBwhole = Math.floor((y + dBmodolus) / 5)
      } else {
        dBwhole = Math.floor(dBmodolus / 5)
      }
      dBmodolus = dBmodolus % 5
      x = (dBwhole * 5) / 100
      if (x >= cidarr[1]) {
        y = x - cidarr[1]
        cidarr[1] = +(x - y).toFixed(2)
      } else {
        y = cidarr[1] - x
        cidarr[1] = +(cidarr[1] - y).toFixed(2)
      }
    } else if (cidarr[1] !== 0 && cidarr[2] === 0) {
      dBwhole = Math.floor(dB / 5)
      dBmodolus = dB % 10
      x = (dBwhole * 5) / 100
      if (x >= cidarr[1]) {
        y = x - cidarr[1]
        cidarr[1] = +(x - y).toFixed(2)
      } else {
        y = cidarr[1] - x
        cidarr[1] = +(cidarr[1][1] - y).toFixed(2)
      }
    }
    cid[1][1] = cidarr[1]
    obj2.change.push(cid[1])
    if (cidarr[0] !== 0) {
      if (x > cidarr[1]) {
        dBwhole = Math.floor(y + dBmodolus)
      } else {
        dBwhole = Math.floor(dBmodolus)
      }
      dBmodolus = dBmodolus % 1
      x = (dBwhole * 1) / 100
      if (x >= cidarr[0]) {
        y = x - cidarr[0]
        cidarr[0] = +(x - y).toFixed(2)
      } else {
        y = cidarr[0] - x
        cidarr[0] = +(cidarr[0] - y).toFixed(2)
      }
    } else if (cidarr[0] !== 0 && cidarr[1] === 0) {
      dBwhole = Math.floor(dB / 1)
      dBmodolus = dB % 1
      x = (dBwhole * 1) / 100
      if (x >= cidarr[0]) {
        y = x - cidarr[0]
        cidarr[0] = +(x - y).toFixed(2)
      } else {
        y = cidarr[0] - x
        cidarr[0] = +(cidarr[0] - y).toFixed(2)
      }
    }
    cid[0][1] = cidarr[0]
    obj2.change.push(cid[0])
     
     // We display the result (cid array)

     document.querySelector('.display-text').innerHTML = `<p>Status : <b>OPEN</b></p>
     <div class="display-currency-notes">
       <div class="cid">
         <label for="penny">PENNY</label>
         <input type="number" value="${cid[0][1]}" class="input">
       </div>
       <div class="cid">
         <label for="nickel">NICKEL</label>
         <input type="number" value="${cid[1][1]}" class="input">
       </div>
       <div class="cid">
         <label for="dime">DIME</label>
         <input type="number" value="${cid[2][1]}" class="input">
       </div>
       <div class="cid">
         <label for="quarter">QUARTE</label>
         <input type="number" value="${cid[3][1]}" class="input">
       </div>
       <div class="cid">
         <label for="one">ONE</label>
         <input type="number" value="${cid[4][1]}" class="input">
       </div>
       <div class="cid">
         <label for="five">FIVE</label>
         <input type="number" value="${cid[5][1]}" class="input">
       </div>
       <div class="cid">
         <label for="ten">TEN</label>
         <input type="number" value="${cid[6][1]}" class="input">
       </div>
       <div class="cid">
         <label for="twenty">TWENTY</label>
         <input type="number" value="${cid[7][1]}" class="input">
       </div>
       <div class="cid">
         <label for="twenty">ONE_HUNDRED</label>
         <input type="number" value="${cid[8][1]}" class="input">
       </div>
     </div>`
 
     // we are updating the values of the cid to display the current cid
     document.getElementById('penny').value = `${a - cidarr[0]}`
     document.getElementById('nickel').value = `${b - cidarr[1]}`
     document.getElementById('dime').value = `${c - cidarr[2]}`
     document.getElementById('quarter').value = `${d - cidarr[3]}`
     document.getElementById('one').value = `${e - cidarr[4]}`
     document.getElementById('five').value = `${f - cidarr[5]}`
     document.getElementById('ten').value = `${g - cidarr[6]}`
     document.getElementById('twenty').value = `${h - cidarr[7]}`
    }

  }