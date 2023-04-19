import { IsNumber } from 'class-validator';

export class CounterResponseDto {
  @IsNumber()
  readonly prev: number;

  @IsNumber()
  readonly current: number;

  @IsNumber()
  readonly next: number;
}

export class CounterDto {
  @IsNumber()
  readonly num: number;
}
