let earth = 0
let totalMult = 0


let clickUpgrades = {
    destroOne: {
        price: 10,
        quantity: 0,
        multiplier: 1
    },
    destroTwo: {
        price: 25,
        quantity: 0,
        multiplier: 5
    }

};

let autoUpgrades = {
    destroThree: {
        price: 50,
        quantity: 0,
        multiplier: 30
    },
    destroFour: {
        price: 500,
        quantity: 0,
        multiplier: 100
    }
};

function destroy() {
    earth++
    earth += totalMult
    update()
    //console.log(earth)

}

function update() {
    document.getElementById('earther').innerText = ` ${earth}`

    document.getElementById('dtOne').innerText = clickUpgrades.destroOne.quantity
    document.getElementById('dtTwo').innerText = clickUpgrades.destroTwo.quantity
    document.getElementById('dtThree').innerText = autoUpgrades.destroThree.quantity
    document.getElementById('dtFour').innerText = autoUpgrades.destroFour.quantity

    document.getElementById('dt1').innerText = clickUpgrades.destroOne.price
    document.getElementById('dt2').innerText = clickUpgrades.destroTwo.price
    document.getElementById('dt3').innerText = autoUpgrades.destroThree.price
    document.getElementById('dt4').innerText = autoUpgrades.destroFour.price

    document.getElementById('mult1').innerText = clickUpgrades.destroOne.multiplier
    document.getElementById('mult2').innerText = clickUpgrades.destroTwo.multiplier
    document.getElementById('mult3').innerText = autoUpgrades.destroThree.multiplier
    document.getElementById('mult4').innerText = autoUpgrades.destroFour.multiplier
}

// click elements b
function buyDestroOne() {
    if (earth >= clickUpgrades.destroOne.price) {
        earth -= clickUpgrades.destroOne.price
        //earth += clickUpgrades.destroOne.multiplier
        clickUpgrades.destroOne.price = clickUpgrades.destroOne.price * 2
        totalMult += clickUpgrades.destroOne.multiplier
        clickUpgrades.destroOne.quantity++
    }
    //console.log('This is purchased ', earth)
    update()
}
function buyDestroTwo() {
    if (earth >= clickUpgrades.destroTwo.price) {
        earth -= clickUpgrades.destroTwo.price
        clickUpgrades.destroTwo.price = clickUpgrades.destroTwo.price * 2
        // earth += clickUpgrades.destroTwo.multiplier
        totalMult += clickUpgrades.destroTwo.multiplier
        clickUpgrades.destroTwo.quantity++
    }
    //console.log('This two is purchased', earth)
    update()
}

function drawAuto() {
    let totalAuto = 0
    totalAuto += autoUpgrades.destroThree.multiplier * autoUpgrades.destroThree.quantity
    totalAuto += autoUpgrades.destroFour.multiplier * autoUpgrades.destroFour.quantity
    earth += totalAuto
    update()
    //console.log(totalAuto)
}

//time elements
function buyDestroThree() {
    if (earth >= autoUpgrades.destroThree.price) {
        earth -= autoUpgrades.destroThree.price
        autoUpgrades.destroThree.price = autoUpgrades.destroThree.price * 2
        //earth += clickUpgrades.destroTwo.multiplier
        // totalAuto += autoUpgrades.destroThree.multiplier
        autoUpgrades.destroThree.quantity++
    }
    //console.log('This auto Three is purchased', earth)
    update()
}
setInterval(drawAuto, 3000)
function buyDestroFour() {
    if (earth >= autoUpgrades.destroFour.price) {
        earth -= autoUpgrades.destroFour.price
        autoUpgrades.destroFour.price = autoUpgrades.destroFour.price * 2
        // earth += clickUpgrades.destroTwo.multiplier
        //totalAuto += autoUpgrades.destroFour.multiplier
        autoUpgrades.destroFour.quantity++
    }
    //console.log('This auto Four is purchased', earth)
    update()
}

// function collectAutoUpgrade() {

// }
