import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FooService } from './foo/foo.service';
import { BarService } from './bar/bar.service';
import { BazService } from './baz/baz.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [FooService, BazService, BarService],
})
export class AppModule {}
