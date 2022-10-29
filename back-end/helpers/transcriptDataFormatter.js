export default class transcriptDataFormatter{
    
    // helper for getting a cleaned up version of a transcript
    static cleanData(transcript){
        var res = []
        var block

        transcript.forEach(function (node){
            block = {
                type: node.type,
                sessionID: node.sessionID,
                startTime: node.startTime,
                format: node.format,
                payload: node.payload
            }
            res.push(block)
        })
        return res
    }
}