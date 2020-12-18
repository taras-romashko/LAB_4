import { Component, OnInit, Input, Inject } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() title: string
  @Input() showTextIfEmpty: string
  @Input() items: any[]
  @Input() hasRemoveBtn: boolean

  constructor(private listService: ListService) {
    this.title = ''
    this.showTextIfEmpty = ''
    this.items = []
    this.hasRemoveBtn = false
  }

  ngOnInit(): void {}

  moveToPurchased(index: number): void {
    this.listService.moveToPurchased(index)
  }
}
