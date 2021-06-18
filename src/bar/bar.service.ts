import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { FooService } from '../foo/foo.service';

@Injectable()
export class BarService {
  constructor(@Inject(forwardRef(() => FooService)) private foo: FooService) {}

  getFoo() {
    return this.foo.getFoo();
  }

  getBar() {
    return 'bar';
  }
}
