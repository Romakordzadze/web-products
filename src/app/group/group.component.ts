
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-group',
  standalone: true, 
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'] // Ensure this is plural
})
export class GroupComponent {
  Showdiv: boolean = false;
  showdiv1: boolean = false;
  showdiv2: boolean = false;

  toggle() {
    console.log(this.Showdiv);
    this.Showdiv = !this.Showdiv;
  }

  toggle1() {
    console.log(this.showdiv1);
    this.showdiv1 = !this.showdiv1;
  }
  toggle2() {
    console.log(this.showdiv2);
    this.showdiv2 = !this.showdiv2;
  }
}