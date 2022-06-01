const CONTAINER_USER = process.env.CONTAINER_USER || 'user';
const CONTAINER_PASS = process.env.CONTAINER_PASS || 'password';
const CONTAINER_DOMAIN = process.env.CONTAINER_DOMAIN || 'domain.com';
const CONTAINER_DIRECTORY = process.env.CONTAINER_DIRECTORY || 'user/directory';

export const CONTAINER_LOCATION = `https://${CONTAINER_USER}:${CONTAINER_PASS}@${CONTAINER_DOMAIN}/${CONTAINER_DIRECTORY}`;
