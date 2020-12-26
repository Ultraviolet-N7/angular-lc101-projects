import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some Festive Photos!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://employeebenefits.co.uk/content/uploads/2019/09/Christmas-cat.png';
  image3 = 'https://townsquare.media/site/158/files/2018/12/GettyImages-497638484.jpg?w=980&q=75';

  constructor() { }

  ngOnInit() {
  }

}