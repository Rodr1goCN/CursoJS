let alfaA = 'A'; // B 
let alfaB = 'B'; // C
let alfaC = 'C'; // A

let tempA = alfaA;
let tempB = alfaB;
let tempC = alfaC;

alfaA = tempB;
alfaB = tempC;
alfaC = tempA;

console.log(alfaA, alfaB, alfaC)

//ou pode fazer deste jeito mais fácil usando array

let A = 'A'; // B 
let B = 'B'; // C
let C = 'C'; // A

[A, B, C] = [B, C, A]

console.log(A, B, C)