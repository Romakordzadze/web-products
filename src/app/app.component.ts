import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroupComponent } from "./group/group.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { WindowComponent } from "./window/window.component";
import { DiagramComponent } from "./diagram/diagram.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GroupComponent, NavbarComponent, WindowComponent, DiagramComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tester';


  }

