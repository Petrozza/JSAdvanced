function printTickets(array, criteria) {


    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];
    //let splittedArr = array.split('|');
    for (let ticketData of array) {
        let splittedArr = ticketData.split('|');
        destination = splittedArr[0];
        price = Number(splittedArr[1]);
        status = splittedArr[2];

        let tic = new Ticket(destination, price, status);
        result.push(tic);
        console.log(result);

    }

    function compare(a, b) {
        if (a[criteria] > b[criteria]) {
            return 1;
        } else if (a[criteria] < b[criteria]) {
            return - 1
        } else {
            return 0;
        }
    }
    return result.sort(compare);
}

console.log(printTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));