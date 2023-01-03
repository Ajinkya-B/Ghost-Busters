import http from "../http-common/http-common";



// This class contains all the functions that make API calls and return info from the calls.
class ProjectDataService {
    getAllProjects() {
        return http.get('/api/v1/projects/');
    }

    createProject(data) {
        return http.post('/api/v1/projects/', data);
    }

    get(id) {
        return http.get(`/api/v1/projects/id/${id}`);
    }


    find(query, by = "name") {
        return http.get(`/api/v1/projects?${by}=${query}`);
    }

    deleteProject(project_name) {
        return http.delete('/api/v1/projects/', {data:{project_name: project_name}});
    }
}

export default new ProjectDataService();
