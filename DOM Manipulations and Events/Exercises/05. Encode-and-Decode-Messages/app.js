function encodeAndDecodeMessages() {
    let areas = document.querySelectorAll('textarea');
    let textToEncode = areas[0];
    let textToDecode = areas[1];
    let buttons = document.querySelectorAll('button');
    let encodeBtn = buttons[0];
    let decodeBtn = buttons[1];



    encodeBtn.addEventListener('click', () => {
        let encodedText = [];
        let input = textToEncode.value;
        for (let i = 0; i < input.length; i++) {
            let char = input.charCodeAt(i);
            encodedText.push(String.fromCharCode(char + 1));
        }
        textToEncode.value = '';
        textToDecode.value = encodedText.join('');
    });

    decodeBtn.addEventListener('click', () => {
        let codedTxt = textToDecode.value;
        let output = [];
        for (let i = 0; i < codedTxt.length; i++) {
            let char = codedTxt.charCodeAt(i);
            output.push(String.fromCharCode(char - 1));
        }
        textToDecode.value = output.join('');
    })

}