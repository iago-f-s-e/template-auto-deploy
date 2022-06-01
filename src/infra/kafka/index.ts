import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { kafkaConnection, provider } from './config';

@Module({
  imports: [ClientsModule.register([kafkaConnection])],
  providers: [provider]
})
export class KafkaModule {}
