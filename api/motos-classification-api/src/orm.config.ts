import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource, DataSourceOptions } from "typeorm";
import { ConfigService } from "./common/config/config.service";

export enum ConnectionStrings {
    PGCONN = 'pgConn',

  }
  
export const pgConn: DataSourceOptions = Object.assign(
    {},
    ConfigService.postgres(),
    {
      name: ConnectionStrings.PGCONN
    }
);

export const source = new DataSource(pgConn);