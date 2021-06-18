import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { BarService } from '../bar/bar.service';
import { BazService } from '../baz/baz.service';

@Injectable()
export class FooService {
  constructor(
    @Inject(forwardRef(() => BarService)) private readonly bar: BarService,
    private readonly baz: BazService,
  ) {}

  getFoo() {
    return 'foo';
  }

  getBar() {
    return this.bar.getBar();
  }
}
