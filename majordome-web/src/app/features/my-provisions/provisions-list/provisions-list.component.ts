import { Component } from '@angular/core';
import { Provision } from 'src/app/shared/models/provision';

@Component({
  selector: 'app-provisions-list',
  templateUrl: './provisions-list.component.html',
  styleUrls: ['./provisions-list.component.css'],
})
export class ProvisionsListComponent {
  provisions: Provision[] = [
    { name: 'Apple', quantity: 1 },
    { name: 'Banana', quantity: 2 },
    { name: 'Butter', quantity: 1 },
    { name: 'Steak', quantity: 4 },
  ];
}
