import { ObjectId } from "mongodb";

export class LastNameModel {
    
    public _id: ObjectId;
    public id: string;
    public name: string;
    public isActive: boolean = true;

    constructor(name?: string, _id?: string) {

        if (!_id) {
            this._id = new ObjectId();
            this.id = `LASTNAME|${name}`
        }

    }
}