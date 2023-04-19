import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CounterService } from './counter.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CounterDto } from 'src/entities/counter.dto';

@Controller('increment')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @UseGuards(AuthGuard)
  @Post()
  getAll(@Body() counter: CounterDto) {
    return this.counterService.increment(counter.num);
  }
}
