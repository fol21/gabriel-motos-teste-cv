import { flatten, Injectable } from '@nestjs/common';
import { FindManyOptions, ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export abstract class BaseRepositoryService<Entity extends ObjectLiteral> {
    protected abstract ormRepository: Repository<Entity>;

    constructor() {
        // this.logger = new LoggingService(this.constructor.name);
    }

    /**
     * Wrapper para método do TypeORM
     */
    find(options?: FindManyOptions<Entity>) {
        return this.ormRepository.find(options);
    }

    /**
     * Wrapper para método do TypeORM
     */
    findOne(options?: FindManyOptions<Entity>) {
        return this.ormRepository.findOne(options);
    }
}
