function fillCanvas() {
    const ctx = document.getElementById("canvas").getContext("2d")

    const showOff = new Image()
    const sDS = new Image()
    const sDH = new Image()
    const sDO1 = new Image()
    const sDW1 = new Image()
    const sDD = new Image()
    const sDO2 = new Image()
    const sDW2 = new Image()
    const sDN = new Image()
    const vegas = new Image()
    const slots = new Image()
    const mustDrop = new Image()
    const bolt = new Image()
    
    showOff.onload = function() {
        ctx.drawImage(showOff, 20,20, 260, 90)
    }
    showOff.src = './images/showdown/showdown-off.png'

    sDS.onload = function() {
        ctx.drawImage(sDS, 2,22, 78, 105)
    }
    sDS.src = './images/showdown/s@2x.png'

    sDH.onload = function() {
        ctx.drawImage(sDH, 31,23, 84, 102)
    }
    sDH.src = './images/showdown/h@2x.png'

    sDO1.onload = function() {
        ctx.drawImage(sDO1, 80,22, 35, 103)
    }
    sDO1.src = './images/showdown/o-1@2x.png'

    sDW1.onload = function() {
        ctx.drawImage(sDW1, 95,23, 77, 94)
    }
    sDW1.src = './images/showdown/w-1@2x.png'

    sDD.onload = function() {
        ctx.drawImage(sDD, 135,21, 69, 94)
    }
    sDD.src = './images/showdown/d@2x.png'

    sDO2.onload = function() {
        ctx.drawImage(sDO2, 161,20, 71, 98)
    }
    sDO2.src = './images/showdown/o-2@2x.png'

    sDW2.onload = function() {
        ctx.drawImage(sDW2, 185,23, 80, 100)
    }
    sDW2.src = './images/showdown/w-2@2x.png'

    sDN.onload = function() {
        ctx.drawImage(sDN, 220,24, 80, 102)
    }
    sDN.src = './images/showdown/n@2x.png'

    vegas.onload = function() {
        ctx.drawImage(vegas, 38,14, 120, 40)
    }
    vegas.src = './images/showdown/vegas@2x.png'

    slots.onload = function() {
        ctx.drawImage(slots, 160,14, 107, 40)
    }
    slots.src = './images/showdown/slots@2x.png'

    mustDrop.onload = function() {
        ctx.drawImage(mustDrop, 55,72, 190, 55)
    }
    mustDrop.src = './images/showdown/must_drop.png'

    bolt.onload = function() {
        ctx.drawImage(bolt, 133,5, 45, 57)
    }
    bolt.src = './images/showdown/bolt@2x.png'
    
}