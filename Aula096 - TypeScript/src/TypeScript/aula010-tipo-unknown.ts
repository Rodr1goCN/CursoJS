let x: unknown; // Parecido com o any só que mais seguro
x = 100;
x = 'Rodrigo';
x = 900;
x = 10;

const y = 8000;
if (typeof x === 'number') console.log(x + y);
