import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from '../app/models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NowSaiGon';

  itemForm!: FormGroup;

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      id: new FormControl(Date.now(), [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      image: new FormControl(
        '//bizweb.dktcdn.net/100/318/614/products/2-12-compressed.jpg?v=1684377047000'
      ),
    });
  }

  itemList: Item[] = [
    {
      id: Date.now(),
      name: 'NowSaiGon',
      price: 120,
      image: '//bizweb.dktcdn.net/100/318/614/products/2-12-compressed.jpg?v=1684377047000' ,
    },
  ];

  addItem(newItem: Item) {
    this.itemList.push(newItem);
    // console.log(newItem);
  }
  delete(value: number) {
    const index = this.itemList.findIndex(item => item.id == value);
    if (index !== -1) {
      this.itemList.splice(index, 1);
    }
  }
}
