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
  isNew = true;

  constructor(private loggy2: LogService) { }

  ngOnInit(): void {
    this.loggy2.selectedLogs.subscribe(log => {
      if (log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;


      }
    });
  }

  onSubmit() {
    // console.log("I hope you come in future")
    // Check if log is new
    if (this.isNew) {
      // Create new log
      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      };
      // Adding log to array of logs
      this.loggy2.addLog(newLog);
    } else {
      // Updating old log
      const updateLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      };
      // Add to array of log using
      this.loggy2.onUpdateLog(updateLog);
    }
    // Clear the state
    this.clearForm();
  }

  // Method to clear form when done
  clearForm() {
    this.isNew = true;
    this.id = '';
    this.text = '';
    this.date = '';
    this.loggy2.stateOfForm();
  }

  generateId() {
    // tslint:disable-next-line: only-arrow-functions
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      // tslint:disable-next-line: no-bitwise
      // tslint:disable-next-line: triple-equals
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
