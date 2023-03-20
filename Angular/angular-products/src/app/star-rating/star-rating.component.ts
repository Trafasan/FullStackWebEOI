import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  auxRating!:number;
  @Input() rating!:number;
  restoreRating(){
    this.auxRating=this.rating;
    console.log("Entra:"+this.auxRating);
  }
  @Output() ratingChanged = new EventEmitter<number>();
  setRating(){
    this.ratingChanged.emit(this.auxRating);
  }
}
