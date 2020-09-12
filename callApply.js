const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullForm: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary= this.salary-amount;
        return this.salary;
    }
}

normalPerson.chargeBill(150);
console.log(normalPerson.salary);