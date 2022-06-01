import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { topics } from '@src/domain/constants';
import { ContainerService } from '../services';

@Controller()
export class ContainerController {
  constructor(private readonly service: ContainerService) {}

  @MessagePattern(topics.UPDATE_CONTAINER)
  public update(): void {
    console.log('atualizando container');

    this.service.update();
  }
}
