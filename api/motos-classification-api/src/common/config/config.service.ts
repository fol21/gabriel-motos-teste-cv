import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from "config";
import { DataSourceOptions, LoggerOptions } from 'typeorm';

@Injectable()
export class ConfigService
{
    
    static postgres()
    {
        const _c = config.get<pgConfig>('pg');
        const pg: DataSourceOptions = {
            type: "postgres",
            url: _c.url,
            synchronize: false,
            logging: _c.logging,
            entities: [
                "dist/**/*.entity{.ts,.js}"
            ],
            // migrations: ["migrations/**/*{.ts,.js}"],
        };
        return pg;
    }

    static training()
    {
        return config.get<TrainingConfig>('training');
    }

    static classification()
    {
        return config.get<ClassificationConfig>('classification');
    }
}

export interface pgConfig {
    url: string,
    logging: LoggerOptions;
}

export interface TrainingConfig {
    url: string;
}

export interface ClassificationConfig {
    url: string;
}
