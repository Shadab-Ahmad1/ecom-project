import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import {faStar} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  starIcon = faStar;
  popularProduct:undefined | product[];
  trendyProduct:undefined | product[];
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      this.popularProduct = data;
    });
    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProduct = data;
    })
  }

}
