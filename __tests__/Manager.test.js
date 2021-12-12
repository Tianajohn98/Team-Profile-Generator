
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager class", () => {
    
    it("should create a new Manager class with name, id, email and officeNumber", () => {
        const manage = {
            name: "whatUp",
            id: 4,
            email: "hola@hola.com",
            officeNumber: 212
        };
        
        const manage1 = new Manager("whatUp", 4, "hola@hola.com", 212);

        expect(manage).toEqual(manage1)
        
    });


})