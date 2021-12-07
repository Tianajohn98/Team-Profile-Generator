const Employee = require("./Employee")

class Manager extends Employee {

    constructor(name,id,email, OFFICENumber) {

        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {

        return "Manager";
    }

    getValue() {

     return this.officeNumber

    }
}

module.experts = Manager 