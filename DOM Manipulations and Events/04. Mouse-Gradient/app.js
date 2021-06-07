function attachGradientEvents() {
    
    // from papazov
    // let gradientBoxElement = document.getElementById('gradient-box');
    // let resultElement = document.getElementById('result');

    // gradientBoxElement.addEventListener('click', function(e){
    //     console.log(e.currentTarget.offsetWidth);
    //     console.log(e.offsetX);

    //     let percent = Math.floor((e.offsetX/ e.currentTarget.offsetWidth)*100);
    //     resultElement.textContent = `${percent}%`;
    // })

    //from victor
    document.getElementById('gradient').addEventListener('mousemove', onMove);

    function onMove(e) {
        const offsetX = e.offsetX;
        const percent = Math.floor(offsetX / e.target.clientWidth * 100);
        
        document.getElementById('result').textContent = `${percent}%`;
       
    }
}