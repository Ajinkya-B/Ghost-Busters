
export class project {
    /**
     * A Project entity.
     * @param project_name
     * @param version_id
     * @param api_key
     * @param transcripts
     */
    constructor(project_name, version_id, api_key, transcripts) {
        this.project_name = project_name;
        this.version_id = version_id;
        this.api_key = api_key;
        this.transcripts = transcripts;
    }
}