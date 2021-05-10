import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = 'no data';
  someNumber = 0;
  constructor(private socket: Socket) {

  }
  ngOnInit(): void {
    this.socket.on('recievedNumber', (data) => {
      console.log(data);
      this.data = data;
    });

    this.socket.on('randomNumber', (data) => {
      console.log(data);
      this.data = data;
    });
  }

  emitNumber(){
    this.socket.emit("emitNumber", this.someNumber)
  }

  emitRandom(){
    this.socket.emit("emitRandom")
  }
}
