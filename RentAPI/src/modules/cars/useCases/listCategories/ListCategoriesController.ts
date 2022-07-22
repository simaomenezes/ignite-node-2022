import { Request, Response } from "express";
import { ListCategoriesUserCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoriesUserCase: ListCategoriesUserCase){}
    handle(request: Request, response: Response): Response {
        const all = this.listCategoriesUserCase.execute();
        return response.json(all);
    }
}

export { ListCategoriesController }