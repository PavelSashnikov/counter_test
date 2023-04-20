import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IncrementService } from 'src/app/shared/services/increment.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private readonly incrementService: IncrementService) {}
  count: number = 0;

  ngOnInit(): void {}
}
