import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';
import * as Settings from '@src/server/settings';

@Module({})
export class AppModule {}

export const appPrefix: RouteTree = {
  path: Settings.CONTEXT_PREFIX,
  module: AppModule,
  children: []
};
