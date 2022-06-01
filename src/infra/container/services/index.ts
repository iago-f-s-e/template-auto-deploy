import { updateContainer } from '../commands';
import { containerStack } from '../helpers';
export class ContainerService {
  public async update(): Promise<void> {
    try {
      await containerStack().push();

      const { stdout } = await updateContainer();

      console.log(`Update response: ${stdout}`);
    } catch (error) {
      console.error(error);
    }
  }
}
