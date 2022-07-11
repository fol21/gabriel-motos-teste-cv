import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionStrings, pgConn } from 'src/orm.config';



@Module({
    imports: [
        TypeOrmModule.forRoot(pgConn),
        TypeOrmModule.forFeature([
            //Training
        ], ConnectionStrings.PGCONN),
    ],
    // providers: [UserRepositoryService, PostRepositoryService],
    // exports: [UserRepositoryService, PostRepositoryService],
})
export class RepositoryModule {}
