import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseDto } from "./base-dto";

@Entity()
export abstract class BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    constructor(id: string){
        this.id = id;
    }
    
    // public abstract toDto(): BaseDto;
    public abstract copy(): BaseEntity;
}
