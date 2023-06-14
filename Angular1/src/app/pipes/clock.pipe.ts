import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Pipe({ name: 'clock', pure: false })
export class ClockPipe implements PipeTransform, OnDestroy {
  private timer: Observable<number>;
  private subscription: Subscription;

  constructor() {
    this.timer = new Observable<number>(observer => {
      setInterval(() => observer.next(Date.now()), 1000);
    });
  }

  transform(value: number): string {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'hh:mm:ss a');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
