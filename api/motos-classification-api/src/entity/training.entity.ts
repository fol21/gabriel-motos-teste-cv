import { BaseEntity } from "src/common/entity";
import { Column } from "typeorm";

export class Training extends BaseEntity
{
    @Column()
    public started: Date;

    @Column()
    public concluded: Date;
    
    @Column()
    public model: Buffer;
    


    constructor(
        id: string,
        started: Date,
        concluded: Date,
        model: Buffer
    ){
        super(id);
        this.started = started;
        this.concluded = concluded;
        this.model = model;

    }
    
    public copy() {
        return new Training(
            this.id,
            this.started,
            this.concluded,
            this.model
        );
    }
}