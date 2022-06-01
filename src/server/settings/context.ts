const CONTEXT = process.env.CONTEXT || '';

export const CONTEXT_PREFIX = CONTEXT.split('-')
  .map(slice => slice.toLowerCase())
  .join('-');

export const CONTEXT_TOPIC = CONTEXT.split('-')
  .map(slice => slice.toLowerCase())
  .join('_');
