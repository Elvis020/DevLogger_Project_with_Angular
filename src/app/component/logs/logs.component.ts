import { LogService } from './../../services/log.service';
import { Log } from './../../models/log.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: Log[];
  selectedLog: Log;
  loaded = false;


  constructor(private loggy: LogService) { }

  ngOnInit() {

    this.loggy.stateClear.subscribe((clear) => {
      if (clear) {
        this.selectedLog = {
          id: '',
          text: '',
          date: ''
        };
      }
    });


    this.loggy.getLogs().subscribe(logs => {
      this.logs = logs;
      this.loaded = true;
    });
  }


  onSelect(log: Log) {
    this.loggy.setForm(log);
    this.selectedLog = log;
  }

  delLoggy(log: Log) {
    if (confirm('Are you sure?')) {
      this.loggy.onDel(log);
    }

  }
}
