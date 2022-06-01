import * as Settings from '@src/server/settings';

export const topics = {
  UPDATE_CUSTOMER: `update_customer_${Settings.STORE}`,
  UPDATE_CONTAINER: `update_container_${Settings.CONTEXT_TOPIC}`
};
