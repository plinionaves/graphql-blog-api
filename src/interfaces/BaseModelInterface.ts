import { ModelsInterface } from "./ModelsInterface";

export interface BaseModelInterface {

    prototype?;
    associate?(models: ModelsInterface): void;

}