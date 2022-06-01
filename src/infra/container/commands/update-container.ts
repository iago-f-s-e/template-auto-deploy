import { exec } from 'child_process';
import { promisify } from 'util';
import { AsyncExec } from '../types';
import * as Settings from '@src/server/settings';

const asyncExec = promisify(exec);

export function updateContainer(): AsyncExec {
  const command = `git pull ${Settings.CONTAINER_LOCATION}`;

  return asyncExec(command);
}
