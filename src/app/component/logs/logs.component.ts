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

  constructor(private loggy: LogService) { }

  ngOnInit() {
    this.loggy.getLogs().subscribe( logs => {
      this.logs = logs;
    });
  }

  onSelect(log: Log) {
    this.loggy.setForm(log);
  }

  delLoggy(log: Log) {
    if(confirm("Are you sure?")) {
      this.loggy.onDel(log);
    }

  }
}
