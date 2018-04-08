import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [`
.moreThan5 {
  color: white;
}

`]

})
export class ServersComponent implements OnInit {
  showMe = true;
  clicks = [];
  ngOnInit() {
  }

  toggleParagraph() {
    this.clicks.push(this.clicks.length);
    this.showMe = !this.showMe;
  }

  getColor(count) {
    return  count > 5 ? 'blue' : 'white';
  }


}
