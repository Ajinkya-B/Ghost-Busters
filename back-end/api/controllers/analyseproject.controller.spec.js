import AnalyseProjectController from "./analyseProject.controller.js";
import {OutputBoundaryInterface} from "../../interfaces/output-boundary-interface.js";
import {InputBoundaryInterface} from "../../interfaces/input-boundary-interface.js";
import ProjectsDAO from "../../dao/projectsDAO.js";

jest.mock("../../services/analyseProject.service.js");
jest.mock("../../interfaces/input-boundary-interface.js");
jest.mock("../../interfaces/output-boundary-interface.js");
jest.mock("../../dao/projectsDAO.js");

const mockResponse = () => {
    let res = {};
    res = {
        status: () => res,
        json: jest.fn((obj) => obj),
        error: "error",
    };
    return res;
};



let interactor;
let outputBoundary;
let dao;

describe("AnalyseProjectsController", () => {
    describe("Set Output Boundary", () => {
        it('should correctly throw an error', function () {
            outputBoundary = new InputBoundaryInterface();
            const t = () => {
                AnalyseProjectController.setOutputBoundary(outputBoundary)
            }
            expect(t).toThrow(Error("not an OutputBoundary"))

        });
    });

    describe("Set Analyse Project Interactor", () => {
        it('should correctly throw an error', function () {
            interactor = new OutputBoundaryInterface();
            const t = () => {
                AnalyseProjectController.setAnalyzeProjectInteractor(interactor)
            }
            expect(t).toThrow(Error("not an InputBoundary"))

        });
    });

    describe("Get Analysed Data", () => {
        beforeEach(() => {

            outputBoundary = OutputBoundaryInterface;


            interactor = new InputBoundaryInterface();
            AnalyseProjectController.setAnalyzeProjectInteractor(interactor);
            AnalyseProjectController.setOutputBoundary(outputBoundary);
            dao = new ProjectsDAO;
            jest.clearAllMocks();

        });

        it("Should correctly get analysed data of a project by id", async () => {
            const res = mockResponse();
            interactor.analyseProject = jest.fn().mockImplementation((obj) => obj);
            outputBoundary.getOutput = jest.fn().mockReturnValue({
                status: "success",
                data: {"abcd": 0},
            });
            await AnalyseProjectController.getAnalysedData(dao,{params: {id: 1}}, res, {});
            expect(interactor.analyseProject).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith({"abcd": 0});

        });

        it("Should correctly return failure", async () => {
            const res = mockResponse();
            interactor.analyseProject = jest.fn().mockImplementation((obj) => obj);
            outputBoundary.getOutput = jest.fn().mockReturnValue({
                status: "failure",
                data: {"abcd": 0},
            });
            await AnalyseProjectController.getAnalysedData(dao,{params: {id: 1}}, res, {});
            expect(interactor.analyseProject).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith({status:"failure"});

        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            interactor.analyseProject = jest.fn().mockImplementation(() => {
                throw {message: "e"};
            });
            await AnalyseProjectController.getAnalysedData(dao,{params: {id: 1}}, res, {});
            expect(res.json).toHaveBeenCalledWith({error: "e"});
        });
    })
})

