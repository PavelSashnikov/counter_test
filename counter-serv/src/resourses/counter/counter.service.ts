import { Injectable } from '@nestjs/common';
import { CounterResponseDto } from 'src/entities/counter.dto';

@Injectable()
export class CounterService {
  private readonly step = 2;

  increment = (num: number): CounterResponseDto => {
    const current = num ? num * this.step : 1;
    const next = current * this.step;
    return {
      prev: num,
      current,
      next,
    };
  };
}
