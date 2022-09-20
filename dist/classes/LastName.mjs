var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
let LastName = class LastName {
    id;
    name;
    isActive = true;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LastName.prototype, "id", void 0);
__decorate([
    Column({
        length: 30,
    }),
    Index({
        unique: true
    }),
    __metadata("design:type", String)
], LastName.prototype, "name", void 0);
__decorate([
    Column("boolean", { default: true }),
    __metadata("design:type", Boolean)
], LastName.prototype, "isActive", void 0);
LastName = __decorate([
    Entity()
], LastName);
export { LastName };
//# sourceMappingURL=LastName.mjs.map