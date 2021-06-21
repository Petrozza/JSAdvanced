class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get firstNameProp(){
        return this.firstName;
    }
    set firstNameProp(value){
        this.firstName = value;
    }
    get lastNameProp(){
        return this,this.lastName;
    }
    set lastNameProp(value){
        this.lastName = value;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value){
        let values = value.split(' ');
        if (values.length == 2) {
            this.firstName = values[0];
            this.lastName = values[1];
        }   
    }
}