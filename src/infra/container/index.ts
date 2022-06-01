import { Module } from '@nestjs/common';
import { ContainerController } from './controllers';
import { ContainerService } from './services';

@Module({
  exports: [ContainerService],
  controllers: [ContainerController],
  providers: [ContainerService]
})
export class ContainerModule {}
