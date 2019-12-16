import { Component } from '@angular/core';
import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text-editor';
  content2 = [];
  content = {
    text : ''
  };
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    // window.localStorage.clear();
    if (localStorage.getItem('result') !== null) {
    this.content2 = JSON.parse(localStorage.getItem('result'));
    console.log(this.content2);
    }
  }
  addContent() {
    this.content2.push(this.content);
    console.log(this.content2);
    localStorage.setItem('result' , JSON.stringify(this.content2));
    location.reload();
  }
}
