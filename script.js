var quotes = [
    [
        "Фраза 1",
    ],

    [
        "Фраза 2",
    ],

    [
        "Фраза 3",
    ],

    [
        "Фраза 4",
    ]
];

document.getElementById("next-quote").addEventListener("click", function() {
   
    var quote = quotes[ Math.floor( Math.random() * quotes.length ) ];

    var phrase = document.querySelector("#phrase");

    phrase.innerHTML = quote;  
});



const btn = document.getElementById('next-quote');

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = changeC()
});

function changeC() { 
    var x = Math.floor(Math.random() *256),
        y = Math.floor(Math.random() * 256),
        z = Math.floor(Math.random() * 256);

    return  "rgb(" + x + "," + y + "," + z + ")";
};
