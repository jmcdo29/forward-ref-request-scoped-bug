import { Injectable, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class BazService {
  constructor(@Inject(REQUEST) private readonly req) {}

  getReqUrl() {
    return this.req.url;
  }
}
