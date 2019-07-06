'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.divWrapper = document.querySelector(`${selector}`);
    this.daysSpan = this.divWrapper.querySelector('span[data-value="days"]');
    this.hoursSpan = this.divWrapper.querySelector('span[data-value="hours"]');
    this.minsSpan = this.divWrapper.querySelector('span[data-value="mins"]');
    this.secsSpan = this.divWrapper.querySelector('span[data-value="secs"]');
    this.targetUnixDateToFinish = targetDate.getTime();
  }
  getCurrentUnixTime() {
    const currentUnixTime = Date.now();
    return currentUnixTime;
  }
  countMsToEnd() {
    this.time = this.targetUnixDateToFinish - this.getCurrentUnixTime();
    return this.time;
  }
  countDays() {
    const days = Math.floor(this.countMsToEnd() / (1000 * 60 * 60 * 24));
    return days;
  }
  countHours() {
    const hours = Math.floor(
      (this.countMsToEnd() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    return hours;
  }

  countMins() {
    const mins = Math.floor(
      (this.countMsToEnd() % (1000 * 60 * 60)) / (1000 * 60),
    );
    return mins;
  }

  countSecs() {
    const secs = Math.floor((this.countMsToEnd() % (1000 * 60)) / 1000);
    return secs;
  }

  appendToHtml() {
    this.daysSpan.textContent = this.countDays();
    this.hoursSpan.textContent = String(this.countHours()).padStart(2, '0');
    this.minsSpan.textContent = String(this.countMins()).padStart(2, '0');
    this.secsSpan.textContent = String(this.countSecs()).padStart(2, '0');
  }
  start() {
    const timer = setInterval(() => {
      this.appendToHtml();
    }, 1000);
    return timer;
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

timer.start();

