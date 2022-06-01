import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';

@Module({})
export class AuthModule {}

export const authPrefix: RouteTree = {
  path: '/auth',
  module: AuthModule
};
