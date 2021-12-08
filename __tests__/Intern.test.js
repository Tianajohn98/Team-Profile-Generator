const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

describe("Intern class", () => {

    it("should create a new Intern class with name, id, email and school", () => {
        const int = {

            name: "int",
            id: 3,
            emai: "howdy@howdy.com",
            school: "TheSchoolOfLife"
        };
        const int1 = new Intern("int", 3, "howdy@howdy.com", "TheSchoolOfLife");
        expect(int).toEqual(int1)
    });

})