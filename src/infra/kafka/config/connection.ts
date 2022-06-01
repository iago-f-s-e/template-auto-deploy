import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import * as Settings from '@src/server/settings';

export const kafkaConnection: ClientProviderOptions = {
  name: 'KAFKA_CONNECTION',
  transport: Transport.KAFKA,
  options: {
    consumer: {
      groupId: Settings.SERVER_ID
    },
    client: {
      clientId: Settings.KAFKA_CLIENT_ID,
      brokers: [Settings.KAFKA_BROKER]
    }
  }
};
