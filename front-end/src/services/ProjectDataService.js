import http from "../http-common";


// This class contains all the functions that make API calls and return info from the calls.
class ProjectDataService {
    getAllProjects() {
        return http.get('/getAllProjects');
    }

    get(id) {
        return http.get(`/id/${id}`);
    }

    createProject(data) {
        return http.post("/createProject", data);
    }
}

export default ProjectDataService;
