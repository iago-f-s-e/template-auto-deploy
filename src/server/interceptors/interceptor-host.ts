import { keys } from '@src/domain/constants';
import { containerStack } from '@src/infra/container/helpers';
import { RedisService } from '@src/infra/redis/services';
import * as Settings from '../settings';

export async function interceptorHost(redisService = new RedisService()): Promise<string> {
  await containerStack().pop();

  const isNotEmpty = !(await containerStack().isEmpty());

  if (isNotEmpty) {
    await redisService.set(keys.BASE_URL, Settings.RESERVE_BASE_URL);

    return Settings.RESERVE_BASE_URL;
  }

  await redisService.set(keys.BASE_URL, Settings.BASE_URL);

  return Settings.BASE_URL;
}
