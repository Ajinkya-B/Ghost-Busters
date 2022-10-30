
export class project {
    /**
     * A Project entity.
     * @param project_name
     * @param project_id
     * @param api_key
     * @param transcripts
     */
    constructor(project_name, project_id, api_key, transcripts) {
        this.project_name = project_name;
        this.project_id = project_id;
        this.api_key = api_key;
        this.transcripts = transcripts;
    }
}