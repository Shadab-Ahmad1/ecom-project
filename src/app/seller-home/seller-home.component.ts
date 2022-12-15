import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import {faTrash,faEdit} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  deleteIcon=faTrash;
  editIcon=faEdit;
  productList:undefined | product[];
  deleteProductMessage:string|undefined;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.List();
  }
  deleteProduct(id:number){
    console.warn("test id", id);
    this.product.removeProduct(id).subscribe((result)=>{
      if(result){
        alert(this.deleteProductMessage="Are you sure you want to delete product ?")
        this.deleteProductMessage="product is deleted";
        this.List();
      }
    })
    setTimeout(() => {
      this.deleteProductMessage=undefined;
    }, 3000);
  }
  List(){
    this.product.productList().subscribe((result)=>{
      console.warn(result);
      if(result){
        this.productList = result
      }
    })
  }
}
