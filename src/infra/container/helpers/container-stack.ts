import { keys } from '@src/domain/constants';
import { RedisService } from '@src/infra/redis/services';

export function containerStack(redisService = new RedisService()): {
  push: () => Promise<void>;
  pop: () => Promise<void>;
  isEmpty: () => Promise<boolean>;
} {
  async function get(): Promise<string[]> {
    const cache = await redisService.get<string[]>(keys.CONTAINER_STACK);

    if (!cache) return ['pre-venda'];

    return [...cache, 'pre-venda'];
  }

  async function insert(): Promise<void> {
    const stack = await get();

    await redisService.set(keys.CONTAINER_STACK, stack);
  }

  async function remove(): Promise<void> {
    const stack = await get();

    const newStack = stack.filter(container => container !== 'pre-venda');

    await redisService.set(keys.CONTAINER_STACK, newStack);
  }

  async function isEmpty(): Promise<boolean> {
    const cache = await redisService.get<string[]>(keys.CONTAINER_STACK);

    if (!cache) return true;

    return !cache.length;
  }

  return {
    push: () => insert(),
    pop: () => remove(),
    isEmpty: () => isEmpty()
  };
}
