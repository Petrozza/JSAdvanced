function cards(face, suit) {
    let card = {
        face: face,
        suit: suit
    };
    function toString(){
        const validFaces=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        
        if ((suit.slice(0, 1) === 'S') &&  validFaces.includes(face)){
            suit = '\u2660';
            console.log(`${face}${suit}`);
        } else if ((suit.slice(0, 1) === 'H') &&  validFaces.includes(face)){
            suit = '\u2665';
            console.log(`${face}${suit}`);
        } else if ((suit.slice(0, 1) === 'D') && validFaces.includes(face)){
            suit = '\u2666';
            console.log(`${face}${suit}`);
        } else if ((suit.slice(0, 1) === 'C') && validFaces.includes(face)){
            suit = '\u2663';
            console.log(`${face}${suit}`);
        } else {
            throw new Error('Error');
        }

       
    };
    return toString(card);
}


//console.log(cards('A', 'S').toString());
//console.log(cards('10', 'H').toString());
console.log(cards('1', 'C').toString());