/* istanbul ignore file */
/**
 * Abstract Class OutputBoundaryInterface.
 *
 * @class Interface
 */
export class OutputBoundaryInterface {
    static isOutputBoundaryInterface = true;

    /**
     * @param {Object} query find specific intent(s)
     */
    static async setOutput(query = {}){
        throw new Error("not implemented");
    }

    /**
     *  @return {Object} response of the interactor
     * */
    static async getOutput() {
        throw new Error("not implemented");
    }
}