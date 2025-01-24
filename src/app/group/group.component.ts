
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface Table{
  code : string,
  productName : string,
  price : string
}

@Component({
  selector: 'app-group',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
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


  array : Table[] = [
    {
      code : "0001",
      productName : "ვაშლი",
      price : "4"
    },
    {
      code : "0002",
      productName : "მსხალი",
      price : "3"
    },
    {
      code : "0003",
      productName : "საზამთრო",
      price : "4"
    }
  ]


  tableData: { codeName: string; productName: string; price: string }[] = [];

  ngOnInit(): void {

    this.loadTableData();


    window.addEventListener('storage', this.handleStorageChange.bind(this));
  }

  loadTableData(): void {
    const savedData = JSON.parse(localStorage.getItem('tableData') || '[]');
    this.tableData = savedData;
  }

  handleStorageChange(event: StorageEvent): void {
    if (event.key === 'tableData') {
      this.loadTableData();
    }
  }
}