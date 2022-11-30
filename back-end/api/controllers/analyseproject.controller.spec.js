import AnalyseProjectController from "./analyseProject.controller.js";
import AnalyseProjectService from "../../services/analyseProject.service.js";


jest.mock("../../services/analyseProject.service.js");

const mockResponse = () => {
    let res = {};
    res = {
        status: () => res,
        json: jest.fn((obj) => obj),
        error: "error",
    };
    return res;
};

describe("AnalyseProjectsController", () => {
    describe("Get Analysed Data", () => {
        it("Should correctly get analysed data of a project by id", async () => {
            const res = mockResponse();
            // AnalyseProjectService.analyseProject.mockImplementationOnce(() =>({id: 1}))
            AnalyseProjectService.analyseProject = jest.fn(() =>({id: 1})).mockReturnValue({
                status: 200,
                data: {"abcd": 0},
            });
            await AnalyseProjectController.getAnalysedData({params:{id:1}}, res);
            expect(AnalyseProjectService.analyseProject).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith({"abcd": 0});

        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            AnalyseProjectService.analyseProject = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await AnalyseProjectController.getAnalysedData({params:{}}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    })
})

