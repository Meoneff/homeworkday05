import { Component, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild, inject, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() newItemEvent = new EventEmitter<Item>();

  constructor() {}

  @ViewChild('appDialog', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);

  openDialog() {
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }

  addProduct(value: Item) {
    this.newItemEvent.emit(value);
    console.log(value);
  }

  productForm!: FormGroup;

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(Date.now(), [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      image: new FormControl(
        '//bizweb.dktcdn.net/100/318/614/products/back-compressed-1.jpg?v=1685588280000'
      ),
    });
  }

  ngOnDestroy(): void {
    // this.dialog.nativeElement.close();
    // this.cdr.detectChanges();
  }
}
