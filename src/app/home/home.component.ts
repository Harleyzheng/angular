import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionsService } from '../promotions.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish : Dish;
  promotion : Promotion;
  leader : Leader;

  constructor(
    private dishService: DishService, 
    private promotionService: PromotionsService,
    private leaderService: LeaderService) { }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .then((dish)=>this.dish = dish);
    this.promotionService.getFeaturedPromotion()
      .then((promotion)=>this.promotion = promotion);
    this.leaderService.getFeaturedLeader()
      .then((leader)=>this.leader = leader);
  }
}
