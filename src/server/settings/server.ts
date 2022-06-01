export const HOST = process.env.HOST || '0.0.0.0';

export const PORT = process.env.PORT || 8080;

export const RESERVE_PORT = process.env.RESERVE_PORT || '8082';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const STORE_ID = process.env.STORE_ID || '0';

export const SERVER_ID = process.env.SERVER_ID || '0';

export const STORE = `store_id_${STORE_ID}`;

export const RESERVE_BASE_URL = `http://${HOST}:${RESERVE_PORT}`;

export const BASE_URL = `http://${HOST}:${PORT}`;
