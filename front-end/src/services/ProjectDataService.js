import http from "../http-common";


// This class contains all the functions that make API calls and return info from the calls.
class ProjectDataService {
    getAll() {
        return http.get(`projects`)
    }
    get(id) {
        return http.get(`/id/${id}`);
    }
}

export default ProjectDataService;
