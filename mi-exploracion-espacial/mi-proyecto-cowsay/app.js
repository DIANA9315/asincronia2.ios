const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

console.log(cowsay.think({
    text: 'grazing in the browser',
    cow: cowsay.SQUIRREL,
    eyes: 'pp',
    tongue: ';;',
}));

console.log(cowsay.say({
    text: 'hello',
    cow: '',
    eyes: 'oo',
    tongue: 'L|',
    wrap: false,
    wrapLength: 40,
    mode: 'b',
}));
// Tu array de planetas no hace nada en este código, pero lo mantengo
// para que sepas dónde estaba.
const planetas = [
    {
        nombre: "Titán",
        descripcion: "La luna más grande de Saturno, con lagos de metano.",
        descubiertoEn: "1655"
    },
    // ... (el resto de tu array de planetas) ...
];
// module.exports = planetas; // Esto ya no es necesario a menos que quieras exportar este array.