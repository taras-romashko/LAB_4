import { Component } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class AppComponent {
  constructor(private listService: ListService) {}

  getToBuyList() {
    return this.listService.getToBuyList()
  }

  getPurchasedList() {
    return this.listService.getPurchasedList()
  }
}
