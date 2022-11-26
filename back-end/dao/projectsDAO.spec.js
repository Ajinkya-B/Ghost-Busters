import { Projects } from "../schema/projects-schema.js"
import ProjectsDAO from "./projectsDAO.js"
import mongoose from "mongoose";

jest.mock("../schema/projects-schema.js");

let dao;
const SAMPLE_PROJECT = {
    project_name: "Test",
    project_id: "1234",
    api_key: "abcd",
    transcripts: []
}

const PROJECT_ID = "637af75bff151a2a60652bb8"
const PIPELINE = [
  {
    $match: {
      _id: new mongoose.Types.ObjectId(PROJECT_ID),
    },
  },
  {
    $lookup: {
      from: "text transcripts",
      let: {
        id: "$project_id",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$project_id", "$$id"],
            },
          },
        },
      ],
      as: "text_transcripts",
    },
  },
  {
    $lookup: {
      from: "transcripts",
      let: {
        id: "$project_id",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$project_id", "$$id"],
            },
          },
        },
      ],
      as: "transcripts",
    },
  },
  {
    $addFields: {
      transcripts: "$transcripts",
      text_transcripts: "$text_transcripts",
    },
  },
];

describe("ProjectsDao", () => {
    beforeEach(async() => {
        const newDao = new ProjectsDAO();
        dao = newDao;
        jest.clearAllMocks();
    });

    describe("Get Projects", () => {
        it("Should correctly call projects find", async () => {
            await dao.getProjects();
            expect(Projects.find).toHaveBeenCalled();
        });

        it("Should correctly call projects find with query", async () => {
          const query = { bark: "woof" };
          await dao.getProjects(query);
          expect(Projects.find).toHaveBeenCalledWith(query);
        });

        // it("Should console log the things", async () => {
        //     const fakePayload = { grrr: "meow" };
        //     Projects.find.mockImplementationOnce(() => {
        //         return fakePayload;
        //     });
        //     const res = await dao.getProjects();
        //     expect(res).toBe(fakePayload);
        // });

        it("Should correctly throw a console error", async () => {
            console.error = jest.fn();
            Projects.find.mockImplementationOnce(() => {
                throw "error";
            });
            await dao.getProjects();
            expect(console.error).toHaveBeenCalledWith(
                "Unable to issue find command, error"
            );
        });
    });

    describe("Create Projects", () => {
        it("Should correctly call projects create", async () => {
            await dao.createProject(SAMPLE_PROJECT);
            expect(Projects.create).toHaveBeenCalled();
        });

        it("Should correctly throw a console error", async() => {
            console.error = jest.fn();
            Projects.create.mockImplementationOnce(() => {
                throw "error";
            });
            await dao.createProject();
            expect(console.error).toHaveBeenCalledWith(
                "Unable to issue create command, error"
            );
        });
    });

    describe("Delete Projects", () => {
        it("Should correctly call projects deleteOne", async () => {
            await dao.deleteProject("haha");
            expect(Projects.deleteOne).toHaveBeenCalled();
        });

        it("Should correctly throw a console error", async () => {
            console.error = jest.fn();
            Projects.deleteOne.mockImplementationOnce((projectName) => {
                throw "error";
            });
            await dao.deleteProject("haha");
            expect(console.error).toHaveBeenCalledWith(
                "Unable to issue delete command, error"
            );
        });
    });
    
    describe("Get Projects By Id", () => {
        it("Should correctly call projects aggregate with pipeline", async () => {
            Projects.aggregate.mockImplementationOnce((pipeline) => {
                return ["Sample1", "Sample2"]
            });
            await dao.getProjectByID(PROJECT_ID);
            expect(Projects.aggregate).toHaveBeenCalledWith(PIPELINE);
        });

        it("Should correctly throw a console error", async () => {
            console.error = jest.fn();
            Projects.aggregate.mockImplementationOnce((pipeline) => {
                throw "error";
            });
            await dao.getProjectByID(PROJECT_ID);
            expect(console.error).toHaveBeenCalledWith(
                "Unable to issue aggregate command, error"
            );
        });
    });
});
