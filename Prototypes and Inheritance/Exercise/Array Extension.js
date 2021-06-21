(function solve(){
    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        return this.slice(n);
    }

    Array.prototype.take = function(n) {
        return this.slice(0, n);
    }

    Array.prototype.sum = function() {
        let sum = this.reduce((acc, x) => acc += x, 0);
        return sum;
    }

    Array.prototype.average = function() {
        return this.sum()/this.length;
    }
})();


let array = [1,2,3];
console.log(array.sum());