function fillCanvas() {
    const ctx = document.getElementById("canvas").getContext("2d")
    const ctx2 = document.getElementById("canvas-2").getContext("2d")
    const ctx3 = document.getElementById("canvas-3").getContext("2d")
    const ctx4 = document.getElementById("canvas-4").getContext("2d")
    const ctx5 = document.getElementById("canvas-5").getContext("2d")

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

    sDS.onload = setTimeout(function() {
        ctx2.drawImage(sDS, 2,22, 78, 105) 
    }, 1000)
    sDS.src = './images/showdown/s@2x.png'

    sDH.onload = setTimeout(function() {
        ctx2.drawImage(sDH, 31,23, 84, 102)
    }, 1200)
    sDH.src = './images/showdown/h@2x.png'

    sDO1.onload = setTimeout(function() {
        ctx2.drawImage(sDO1, 80,22, 35, 103)
    }, 1400)
    sDO1.src = './images/showdown/o-1@2x.png'

    sDW1.onload = setTimeout(function() {
        ctx2.drawImage(sDW1, 95,23, 77, 94)
    }, 1600)
    sDW1.src = './images/showdown/w-1@2x.png'

    sDD.onload = setTimeout(function() {
        ctx2.drawImage(sDD, 135,21, 69, 94)
    }, 1800)
    sDD.src = './images/showdown/d@2x.png'

    sDO2.onload = setTimeout(function() {
        ctx2.drawImage(sDO2, 161,20, 71, 98)
    }, 2000)
    sDO2.src = './images/showdown/o-2@2x.png'

    sDW2.onload = setTimeout(function() {
        ctx2.drawImage(sDW2, 185,23, 80, 100)
    }, 2200)
    sDW2.src = './images/showdown/w-2@2x.png'

    sDN.onload = setTimeout(function() {
        ctx2.drawImage(sDN, 220,24, 80, 102)
    }, 2400)
    sDN.src = './images/showdown/n@2x.png'

    vegas.onload = setTimeout(function() {
        ctx4.drawImage(vegas, 38,14, 120, 40)
        let count = 10
                timer = setInterval(function() {
                    count--;
                    if( count%3 == 1) {
                        ctx4.clearRect(38,14, 120, 40)
                    }
                    else if ( count == 0) {
                        ctx4.drawImage(vegas, 38,14, 120, 40)
                    }
                },10);
    }, 400)
    vegas.src = './images/showdown/vegas@2x.png'

    slots.onload = setTimeout(function() {
        ctx4.drawImage(slots, 160,14, 107, 40)
        let count = 10
                timer = setInterval(function() {
                    count--;
                    if( count%3 == 1) {
                        ctx4.clearRect(160,14, 107, 40)
                    }
                    else if ( count == 0) {
                        ctx4.drawImage(slots, 160,14, 107, 40)
                    }
                },10);
    }, 400)
    slots.src = './images/showdown/slots@2x.png'

    mustDrop.onload = setTimeout(function() {
        ctx5.drawImage(mustDrop, 55,72, 190, 55)
        let count = 10
                timer = setInterval(function() {
                    count--;
                    if( count%3 == 1) {
                        ctx5.clearRect(55,72, 190, 55)
                    }
                    else if ( count == 0) {
                        ctx5.drawImage(mustDrop, 55,72, 190, 55)
                    }
                },10);
    }, 3000)
    mustDrop.src = './images/showdown/must_drop.png'

    bolt.onload = setTimeout(function() {
            let count = 99999,
                timer = setInterval(function() {
                    count--;
                    if( count%2 == 1) {
                        ctx3.drawImage(bolt, 133,5, 45, 57)
                    }
                    else {
                        ctx3.clearRect(133,5, 45, 57)
                    }
                    if( count == 0) clearInterval(timer);
                },100);
    }, 1500)
    bolt.src = './images/showdown/bolt@2x.png'
}