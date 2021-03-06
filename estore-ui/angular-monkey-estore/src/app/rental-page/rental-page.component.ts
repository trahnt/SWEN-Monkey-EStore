import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { UserService } from '../user.service';
import { CurrentUserService } from '../current-user.service';
import { Review } from '../review';
import { Rental } from '../rental'
import { Location } from '@angular/common';
import { MonkeyService } from '../monkey.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { Monkey } from '../monkey';
import { RentalService } from '../rental.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-page',
  templateUrl: './rental-page.component.html',
  styleUrls: ['./rental-page.component.css']
})
export class RentalPageComponent implements OnInit {
  monkeys: Monkey[] = [];

  constructor(private cartService: ShoppingCartService,
    public currentUserService: CurrentUserService,
    public monkeyService: MonkeyService,
    public rentalService: RentalService,
    private router: Router) 
    {}

  items: Rental[] = [];

  selectedMonkey?: Monkey;
  id: number = 0;

  onSelect(monkey: Monkey): void {
    this.selectedMonkey = monkey;
    this.id = monkey.id;
  }

  deselect(): void{
    this.selectedMonkey = undefined;
  }

  ngOnInit(): void {
    this.getRentedList();
    setTimeout(()=>{this.getMonkeyList();}, 100);
  }

  getRentedList(){
    this.currentUserService.load();
    this.rentalService.getRentalsUser(this.currentUserService.user.id, true).subscribe(rentals => this.items = rentals)
  }

  getMonkeyList(){
    for (let k = 0; k < this.items.length; k++){
      this.monkeyService.getMonkey(this.items[k].monkeyId).subscribe(monkey => this.monkeys[k] = monkey)
    }
  }

  returnFromRented(id: number): void{
    for (let k = 0; k < this.items.length; k++){
      if (this.monkeys[k].id == id){
        this.monkeys[k].rented = false;
        this.monkeyService.updateMonkey(this.monkeys[k]).subscribe()
      }
      if (this.items[k].monkeyId == id){
        this.items[k].active = false
        this.rentalService.updateRental(this.items[k]).subscribe();
        this.rentalService.deleteRental(this.items[k].id).subscribe();
        break;
      }
    }
    this.getRentedList();
  }

  getRentalDate(rental: Rental){
    var returnStr: string = "DATE";
    this.rentalService.getRentalDateString(rental).subscribe(str => returnStr = str);
    return returnStr;
  }

  getReturnDate(rental: Rental){
    var returnStr: string = "DATE"
    this.rentalService.getReturnDateString(rental).subscribe(str => returnStr = str);
    return returnStr;
  }

  switchPage(): void {
    this.router.navigate(["/post-return-page/" + this.id]);
  }
}
