import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Log } from './../models/log.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null});
  selectedLogs = this.logSource.asObservable();

  constructor() {
    this.logs = [
      { id: '1', text: 'Generated Component', date: new Date('12/26/2020 12:33:07') },
      { id: '2', text: 'Added Bootstrap', date: new Date('12/23/2020 09:13:15') },
      { id: '3', text: 'Added Logs Component', date: new Date('03/04/2020 07:38:21') },
    ];
  }

  getLogs() {
    return this.logs;
  }

  setForm(log: Log) {
    this.logSource.next(log);
  }
}
