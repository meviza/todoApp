import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Kerem';
  items = [
    { Description: "Kahvaltı", action: "No" },
    { Description: "Spor", action: "No" },
    { Description: "Sinema", action: "No"},
    { Description: "Ders Çalışma", action: "No"}

  ] 
}
