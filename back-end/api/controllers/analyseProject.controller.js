import AnalyseProjectService from '../../services/analyseproject.service.js'

export default class AnalyseProjectController{
    static async getAnalysedData(req, res, next){
        let id = req.params.id || {};
        try{
            const analyseProjectResponse = await AnalyseProjectService.analyseProject(id)
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