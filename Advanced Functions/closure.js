//setup example
// function endGame() {
//     let avengers =
//         ['Iron Man',
//             'Captain America',
//             'Thor',
//         ];

//     function asemble(avengers) {
//         let enemy = 'Thanos';

//         console.log(`Avengers, asemble!`);
//         console.log(avengers.join(', '));
//         console.log(`Lets kill ${enemy}`);
//     }

//     asemble(avengers);
// }
// endGame();

//modify to closure

function endGame() {
    let avengers =
        ['Iron Man',
            'Captain America',
            'Thor',
        ];

    function asemble() {
        let enemy = 'Thanos';

        console.log(`Avengers, asemble!`);
        console.log(avengers.join(', '));
        console.log(`Lets kill ${enemy}`);
    }

    return asemble;
}

let finalAct = endGame();
finalAct();