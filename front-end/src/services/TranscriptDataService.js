import http from "../http-common/http-common";


// This class contains all the functions that make API calls and return info from the calls.
class TranscriptDataService {
    getCredentials() {
        return http.get('/api/v1/transcripts/getCredentials');
    }

    uploadTranscripts(data) {
        return http.post('/api/v1/transcripts/trimmed', data);
    }

    storeCredentials(values) {
        return http.post('/api/v1/transcripts/store', values);
    }

}

export default new TranscriptDataService();