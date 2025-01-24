import { Component, EventEmitter, Output,} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent {

  @Output() newShowWindow = new EventEmitter<boolean>()

  close(){
    this.newShowWindow.emit(false)
    }

    code : string = "";
    productName : string = "";
    price : string = "";


    saveInfo() {
      const existingData = JSON.parse(localStorage.getItem('tableData') || '[]'); 
      existingData.push({
        codeName: this.code,
        productName: this.productName,
        price: this.price,
      });
      localStorage.setItem('tableData', JSON.stringify(existingData)); 
    }
    

}
