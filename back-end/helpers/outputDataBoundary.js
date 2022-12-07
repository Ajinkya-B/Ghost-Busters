import { OutputBoundaryInterface } from "../interfaces/output-boundary-interface.js";

export default class OutputDataBoundary extends OutputBoundaryInterface{
    static #output = {};

    static setOutput(output){
        this.#output = output;
    }

    static getOutput(){
        return this.#output;
    }
}