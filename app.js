let firstRed = document.getElementById("firstRed");
let firstYellow = document.getElementById("firstYellow");
let firstGreen = document.getElementById("firstGreen");

let secondRed = document.getElementById("secondRed");
let secondYellow = document.getElementById("secondYellow");
let secondGreen = document.getElementById("secondGreen");

let thirdRed = document.getElementById("thirdRed");
let thirdYellow = document.getElementById("thirdYellow");
let thirdGreen = document.getElementById("thirdGreen");

let fourthRed = document.getElementById("fourthRed");
let fourthYellow = document.getElementById("fourthYellow");
let fourthGreen = document.getElementById("fourthGreen");

let isThree = 0;
let isFour = 0;

let sec1 = 0;
let red = true;
let yellow = false;
let green = false;

const trafficSignal1 = () => {
  if (red === true && yellow === false && green === false) {
    firstRed.style.backgroundColor = "red";
    firstGreen.style.backgroundColor = "gray";
    red = false;
    yellow = true;
    green = false;
    sec1 = 12000;
    console.log("first red");

    clearInterval(firstInterval);
    firstInterval = setInterval(() => {
      trafficSignal1();
      console.log(sec1);
    }, sec1);
  } else if (red === false && yellow === true && green === false) {
    firstRed.style.backgroundColor = "gray";
    firstYellow.style.backgroundColor = "yellow";
    red = false;
    yellow = false;
    green = true;
    sec1 = 1000;
    console.log("second red");

    clearInterval(firstInterval);
    firstInterval = setInterval(() => {
      trafficSignal1();
      console.log(sec1);
    }, sec1);
  } else if (red === false && yellow === false && green === true) {
    firstRed.style.backgroundColor = "gray";
    firstYellow.style.backgroundColor = "gray";
    firstGreen.style.backgroundColor = "green";
    console.log("third red");
    red = true;
    yellow = false;
    green = false;
    sec1 = 3000;

    clearInterval(firstInterval);
    firstInterval = setInterval(() => {
      trafficSignal1();
      console.log(sec1);
    }, sec1);
  }
};

let firstInterval = setInterval(() => {
  trafficSignal1();
  console.log(sec1);
}, sec1);

//   Second Signal ====================================

let sec2 = 0;
let red2 = false;
let yellow2 = false;
let green2 = true;

const trafficSignal2 = () => {
  console.log(sec2);

  if (red2 === false && yellow2 === false && green2 === true) {
    secondRed.style.backgroundColor = "gray";
    secondYellow.style.backgroundColor = "gray";
    secondGreen.style.backgroundColor = "green";
    red2 = true;
    yellow2 = false;
    green2 = false;
    sec2 = 3000;
    console.log("first red");
    isThree = 0;

    clearInterval(secondInterval);
    secondInterval = setInterval(() => {
      trafficSignal2();
      console.log(sec2);
    }, sec2);
  } else if (red2 === false && yellow2 === true && green2 === false) {
    secondRed.style.backgroundColor = "gray";
    secondYellow.style.backgroundColor = "yellow";
    secondGreen.style.backgroundColor = "gray";
    red2 = false;
    yellow2 = false;
    green2 = true;
    sec2 = 1000;
    console.log("second red");

    clearInterval(secondInterval);
    secondInterval = setInterval(() => {
      trafficSignal2();
      console.log(sec2);
    }, sec2);
  } else if (red2 === true && yellow2 === false && green2 === false) {
    secondRed.style.backgroundColor = "red";
    secondYellow.style.backgroundColor = "gray";
    secondGreen.style.backgroundColor = "gray";
    console.log("third red");
    red2 = false;
    yellow2 = true;
    green2 = false;
    sec2 = 12000;

    clearInterval(secondInterval);
    secondInterval = setInterval(() => {
      trafficSignal2();
      console.log(sec2);
    }, sec2);
  }
};

let secondInterval = setInterval(() => {
  trafficSignal2();
  console.log(sec2);
}, sec2);

// Signal 3====================================

let sec3 = 0;
let red3 = true;
let yellow3 = false;
let green3 = false;

const trafficSignal3 = () => {
  console.log(sec3);

  if (red3 === true && yellow3 === false && green3 === false) {
    thirdRed.style.backgroundColor = "red";
    thirdYellow.style.backgroundColor = "gray";
    thirdGreen.style.backgroundColor = "gray";
    red3 = false;
    yellow3 = true;
    green3 = false;
    if (isThree === 0) {
      sec3 = 3000;
    } else {
      sec3 = 12000;
    }
    console.log("first red");

    clearInterval(thirdInterval);
    thirdInterval = setInterval(() => {
      trafficSignal3();
      console.log(sec3);
    }, sec3);
  } else if (red3 === false && yellow3 === true && green3 === false) {
    thirdRed.style.backgroundColor = "gray";
    thirdYellow.style.backgroundColor = "yellow";
    thirdGreen.style.backgroundColor = "gray";
    red3 = false;
    yellow3 = false;
    green3 = true;
    sec3 = 1000;
    console.log("second red");

    clearInterval(thirdInterval);
    thirdInterval = setInterval(() => {
      trafficSignal3();
      console.log(sec3);
    }, sec3);
  } else if (red3 === false && yellow3 === false && green3 === true) {
    thirdRed.style.backgroundColor = "gray";
    thirdYellow.style.backgroundColor = "gray";
    thirdGreen.style.backgroundColor = "green";
    console.log("third red");
    red3 = true;
    yellow3 = false;
    green3 = false;
    sec3 = 3000;
    isThree = 1;
    isFour = 0;

    clearInterval(thirdInterval);
    thirdInterval = setInterval(() => {
      trafficSignal3();
      console.log(sec3);
    }, sec3);
  }
};

let thirdInterval = setInterval(() => {
  trafficSignal3();
  console.log(sec3);
}, sec3);

// Signal 4 ====================================

let sec4 = 0;
let red4 = true;
let yellow4 = false;
let green4 = false;

const trafficSignal4 = () => {
  console.log(sec4);

  if (red4 === true && yellow4 === false && green4 === false) {
    fourthRed.style.backgroundColor = "red";
    fourthYellow.style.backgroundColor = "gray";
    fourthGreen.style.backgroundColor = "gray";
    red4 = false;
    yellow4 = true;
    green4 = false;
    console.log("first red");

    if (isFour === 0) {
      sec4 = 7000;
    } else {
      sec4 = 12000;
    }

    clearInterval(fourthInterval);
    fourthInterval = setInterval(() => {
      trafficSignal4();
      console.log(sec4);
    }, sec4);
  } else if (red4 === false && yellow4 === true && green4 === false) {
    fourthRed.style.backgroundColor = "gray";
    fourthYellow.style.backgroundColor = "yellow";
    fourthGreen.style.backgroundColor = "gray";
    red4 = false;
    yellow4 = false;
    green4 = true;
    sec4 = 1000;

    console.log("second red");
    clearInterval(fourthInterval);
    fourthInterval = setInterval(() => {
      trafficSignal4();
      console.log(sec4);
    }, sec4);
  } else if (red4 === false && yellow4 === false && green4 === true) {
    fourthRed.style.backgroundColor = "gray";
    fourthYellow.style.backgroundColor = "gray";
    fourthGreen.style.backgroundColor = "green";
    console.log("third red");
    red4 = true;
    yellow4 = false;
    green4 = false;
    sec4 = 3000;

    isFour = 1;

    clearInterval(fourthInterval);
    fourthInterval = setInterval(() => {
      trafficSignal4();
      console.log(sec4);
    }, sec4);
  }
};

let fourthInterval = setInterval(() => {
  trafficSignal4();
  console.log(sec4);
}, sec4);
