function spin() {
  
    let degArray = [8756, -4829, 2518, -1574, -2665, 895, 3657, 1254, -8624] 
    //controlled input values can be inserted above to remove truly random aspect.
    let wheel = document.getElementById('wheel')
    let index = -1

    function randomNum(myMin,myMax){ 
        return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    }

    let random = randomNum(0,8)

    let deg = degArray[random]

    wheel.style.transform = "rotate("+deg+"deg)";
  
}