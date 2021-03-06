import { Component, OnInit, Input } from '@angular/core';
import { Params } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/services/dish.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {
  dish : Dish;

  constructor(
    private dishService : DishService,
    private location : Location,
    private route : ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.dishService.getDish(id)
      .subscribe((dish)=>this.dish = dish);
  }

  goBack() : void{
    this.location.back();
  }
}