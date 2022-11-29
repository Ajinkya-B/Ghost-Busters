import AnalyseProjectService from '../../services/analyseProject.service.js'


/**
 * A Get API to get the analysed metrics of a project.
 * @param {Object} req : contains additional body passed to an API call
 * @param {Object} res : json object that is returned after making an API call
 * @param {Object} next
 */
export default class AnalyseProjectController{
    static async getAnalysedData(dao, req, res, next){
        let id = req.params.id || {};
        try{
            const analyseProjectResponse = await AnalyseProjectService.analyseProject(dao, id)
        switch (analyseProjectResponse.status) {
            case "success":
                console.log("Project Analysed!");
                res.json(analyseProjectResponse.data);
                return;
            case "failure":
                res.json({ status: "failure" });
                return;
        }
    } catch (e) {
            res.status(500).json({status: "failure"});
        }
    }
}

