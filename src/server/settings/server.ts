export const HOST = process.env.HOST || '0.0.0.0';

export const PORT = process.env.PORT || 8080;

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const STORE_ID = Number(process.env.STORE_ID) || 0;

export const STORE_GROUP_ID = Number(process.env.STORE_GROUP_ID) || 0;
