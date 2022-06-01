import { Module, OnModuleInit } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { InfraModule } from '@src/infra';
import { interceptorHost } from '@src/server/interceptors';
import { AppModule, appPrefix } from './app';
import { AuthModule, authPrefix } from './auth';
import { CommonModule } from './common';

@Module({
  imports: [
    InfraModule,
    AppModule,
    AuthModule,
    CommonModule,
    RouterModule.register([appPrefix, authPrefix])
  ]
})
export class Modules implements OnModuleInit {
  public onModuleInit(): void {
    interceptorHost()
      .then(host => {
        console.log('=========================================');
        console.log(`Exported host: ${host} =`);
        console.log('=========================================');
      })
      .catch(err => console.error(err));
  }
}
