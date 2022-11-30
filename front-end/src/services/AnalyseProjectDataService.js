import http from "../http-common/http-common.analyseProject";


// This class contains all the functions that make API calls and return info from the calls.
class AnalyseProjectDataService{
    analyseProject(id) {
        return http.get(`/api/v1/analyseProject/${id}`);
    }
}

export default new AnalyseProjectDataService();
