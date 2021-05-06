const sinon = require("sinon");
const { allCriptos, criptoIds } = require("../mocks/criptos");
const userService = require("../../app/services/user");
const { expect } = require("chai");
const criptoService = require("../../app/services/cripto");
const { stub, spy } = sinon;

describe("Test user service methos", () => {
  describe("getCriptosFromApi", () => {
    let criptoServiceSpy = spy(userService, "getCriptosFromApi");
    afterEach(() => {
      stub.restore;
      spy.restore;
    });
    it("When call getCriptosFromApi method should return criptos list", async () => {
      stub(criptoService, "getCriptoByIdFromApi").resolves(allCriptos[0]);
      const data = await userService.getCriptosFromApi(criptoIds);
      expect(data.length).to.equal(3);
      expect(typeof data).to.equal("object");
      expect(criptoServiceSpy.calledOnceWith(criptoIds)).true;
    });

    it("When call getCriptosFromApi method should return a empty array because not found criptos", async () => {
      const data = await userService.getCriptosFromApi([]);
      expect(data.length).to.equal(0);
      expect(typeof data).to.equal("object");
      expect(criptoServiceSpy.calledOnceWith(criptoIds)).false;
    });
  });

});
