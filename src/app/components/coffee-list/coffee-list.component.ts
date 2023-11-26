import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService } from '../../services/coffee.service';
import { Observable } from 'rxjs';
import { CoffeeModel } from 'src/app/models/coffee.model';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-coffee-list',
    standalone: true,
    templateUrl: './coffee-list.component.html',
    styleUrls: ['./coffee-list.component.scss'],
    imports: [CommonModule, CardComponent]
})
export class CoffeeListComponent {
  

  readonly coffeeList$: Observable<CoffeeModel[]> = this._coffeeService.getAll()

  constructor(private _coffeeService: CoffeeService) {
  }
}
