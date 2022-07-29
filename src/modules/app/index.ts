import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';

@Module({})
export class AppModule {}

export const appPrefix: RouteTree = {
  path: '/app',
  module: AppModule,
  children: []
};
