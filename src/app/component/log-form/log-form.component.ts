import { LogService } from './../../services/log.service';
import { Log } from './../../models/log.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: string;
  text1 = false;

  constructor( private loggy2: LogService) { }

  ngOnInit(): void {
    this.loggy2.selectedLogs.subscribe(log => {
      if ( log.id !== null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
        this.text1 = true;

      }
    });
  }

}
