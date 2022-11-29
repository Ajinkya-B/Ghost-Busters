import AnalyseProjectService from '../../services/analyseProject.service.js'


/**
 * A Get API to get the analysed metrics of a project.
 * @param {Object} req : contains additional body passed to an API call
 * @param {Object} res : json object that is returned after making an API call
 * @param {Object} next
 */
export default class AnalyseProjectController{
    static async getAnalysedData(req, res){
        let id = req.params.id || {};
        try{
            const analyseProjectResponse = await AnalyseProjectService.analyseProject(id)
            res.json(analyseProjectResponse.data);
            res.status(analyseProjectResponse.status);

    } catch (e) {
            res.status(500).json({error: e.message});
        }
    }
}

