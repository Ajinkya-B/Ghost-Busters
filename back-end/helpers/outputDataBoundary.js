import { OutputBoundaryInterface } from "../interfaces/output-boundary-interface.js";

export default class OutputDataBoundary extends OutputBoundaryInterface{
    //Object for the return values where the output boundary is set
    static #output = {};

    static setOutput(output){
        this.#output = output;
    }

    static getOutput(){
        return this.#output;
    }
}