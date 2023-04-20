import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Api } from 'src/app/entities/api/api.namespace';
import { INIT_NUMS } from 'src/app/entities/home/constants';
import { IncrementService } from 'src/app/shared/services/increment.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor(
    private readonly incrementService: IncrementService,
    private cd: ChangeDetectorRef
  ) {}
  counter = INIT_NUMS;
  showModal = false;

  onIncrement(closeModal?: boolean): void {
    this.incrementService
      .increment(this.counter.current)
      .pipe(take(1))
      .subscribe((data) => {
        this.counter = data;
        this.showModal = closeModal ? false : true;
        this.cd.detectChanges();
      });
  }

  modalAction(confirmed: boolean): void {
    this.showModal = false;
    if (confirmed) {
      this.onIncrement(true);
    }
  }
}
