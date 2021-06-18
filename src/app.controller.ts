import { Controller, Get } from '@nestjs/common';
import { FooService } from './foo/foo.service';

@Controller()
export class AppController {
  constructor(private readonly foo: FooService) {}

  @Get()
  getHello(): string {
    return this.foo.getBar();
  }
}
