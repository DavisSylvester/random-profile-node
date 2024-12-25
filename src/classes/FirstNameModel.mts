import { ObjectId } from "mongodb";
import { Gender } from "./enums/Gender.mjs";

export class FirstNameModel {
    
    public _id: ObjectId;
    public id: string;
    public name: string;
    public gender: Gender;
    public isActive: boolean = true;

    constructor(name?: string, _id?: string) {

        if (!_id) {
            this._id = new ObjectId();
            this.id = `FIRSTNAME|${name}`
        }

    }
}