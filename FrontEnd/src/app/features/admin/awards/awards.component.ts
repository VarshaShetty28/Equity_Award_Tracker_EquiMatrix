import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './awards.component.html'
})
export class AwardsComponent {

  searchText: string = '';

  awards = [
    { id: 1, name: 'John Doe', esop: 1000, rsu: 500 },
    { id: 2, name: 'Jane Smith', esop: 1500, rsu: 700 },
    { id: 3, name: 'Mike Ross', esop: 800, rsu: 300 }
  ];

}