import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { WindowComponent } from '../window/window.component';
import { DiagramComponent } from "../diagram/diagram.component";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, WindowComponent, DiagramComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  showwindow: boolean = false;
  showDiagram: boolean = false;


  showDiagramWindow(){
    if(this.showwindow == true){
      return
    }
    this.showDiagram = true
  }

  updateShowDiagram(newValue: boolean){
    this.showDiagram = newValue
  }

  updateShowWindow(newValue : boolean){
    this.showwindow = newValue
  }
  openWindow(){
    if(this.showDiagram == true){
      return
    }
    this.showwindow = true
  }



}
