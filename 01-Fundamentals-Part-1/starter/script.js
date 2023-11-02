//////////////////// Coding Challenge #1 ////////////////////

// const marksMass = 78;
// const marksWeight = 1.69;
// const johnMass = 92;
// const johnWeight = 1.95;

const marksMass = 95;
const marksWeight = 1.88;
const johnMass = 85;
const johnWeight = 1.76;

const markBMI = marksMass / marksWeight ** 2;
const johnBMI = johnMass / (johnWeight * johnWeight);
const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI, markBMI,  johnBMI);