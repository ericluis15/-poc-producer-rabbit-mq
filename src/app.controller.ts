import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQService } from './rabbit-mq.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}
  @Get()
  async getHello() {
    this.rabbitMQService.send('rabbit-mq-producer', {
      message: this.appService.getHello(),
    });
    return 'Message sent to the queue!';
  }
}
