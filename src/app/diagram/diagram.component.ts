import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.css'
})
export class DiagramComponent {
  @Output() newShowDiagram = new EventEmitter<boolean>()



  closeDiagram(){
    this.newShowDiagram.emit(false)
    }
}

