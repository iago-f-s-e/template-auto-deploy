import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './config';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), TypeOrmModule.forFeature([])]
})
export class DatabaseModule {}
