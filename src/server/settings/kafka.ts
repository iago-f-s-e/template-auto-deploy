const KAFKA_HOST = process.env.KAFKA_HOST || 'host.docker.internal';
const KAFKA_PORT = process.env.KAFKA_PORT || 9094;

export const KAFKA_CLIENT_ID = process.env.KAFKA_CLIENT_ID || 'client_id';

export const KAFKA_BROKER = `${KAFKA_HOST}:${KAFKA_PORT}`;
