function extendPrototype(Claz) {
    Claz.prototype.species = 'Human';
    Claz.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}