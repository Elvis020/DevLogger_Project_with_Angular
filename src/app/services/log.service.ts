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


  private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null });
  selectedLogs = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   { id: '1', text: 'Generated Component', date: new Date('12/26/2020 12:33:07') },
    //   { id: '2', text: 'Added Bootstrap', date: new Date('12/23/2020 09:13:15') },
    //   { id: '3', text: 'Added Logs Component', date: new Date('03/04/2020 07:38:21') },
    // ];
    this.logs = [];
  }



  getLogs(): Observable<Log[]> {
    if (localStorage.getItem('logs') === null) {
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem('logs'));
    }

    return of(this.logs.sort((a, b) => {
      return b.date - a.date;
    }));
  }

  setForm(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
    // Add to local Storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  onUpdateLog(log: Log) {
    this.logs.forEach((currentLog, index) => {
      if (currentLog.id === log.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);

    // Update local Storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  onDel(log: Log) {
    this.logs.forEach((currentLog, index) => {
      if (currentLog.id === log.id) {
        this.logs.splice(index, 1);
      }
      // Delete from local Storage
      localStorage.setItem('logs', JSON.stringify(this.logs));
    });
  }

  stateOfForm() {
    this.stateSource.next(true);
  }
}
