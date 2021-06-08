function attachEventsListeners() {

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click', () =>{
        hoursInput.value = Number(daysInput.value) * 24;
        minutesInput.value = Number(daysInput.value) * 1440;
        secondsInput.value = Number(daysInput.value) * 86400;
    });

    hoursButton.addEventListener('click', () =>{
        daysInput.value = Number(hoursInput.value) / 24;
        minutesInput.value = Number(hoursInput.value) * 60;
        secondsInput.value = Number(hoursInput.value) * 60 * 60;
    });

    minutesButton.addEventListener('click', () =>{
        daysInput.value = Number(minutesInput.value) /60 / 24;
        hoursInput.value = Number(minutesInput.value) / 60;
        secondsInput.value = Number(minutesInput.value) * 60;
    });

    secondsButton.addEventListener('click', () =>{
        daysInput.value = Number(secondsInput.value) /60 /60 / 24;
        hoursInput.value = Number(secondsInput.value) / 60 /60;
        minutesInput.value = Number(secondsInput.value) / 60;
    });

}