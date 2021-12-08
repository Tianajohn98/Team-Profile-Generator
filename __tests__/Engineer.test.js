const Engineer = require("../lib/Engineer");
const Employee = require('../lib/Employee');

describe("Engineer class", () => {


    it("should have the name,id and email properties", () => {
      const Engineer1 = {

        name:"eng",
        id: 2 , 
        email: "hey@hey.com",
        github:"@eng"
      }

     const eng1 = new Engineer("eng" , 2, "hey@hey.com", "@eng");
     expect(engineer1).toEqual(eng1);
    });
})