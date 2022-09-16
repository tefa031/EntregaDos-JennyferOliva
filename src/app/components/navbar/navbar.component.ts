import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img='https://docs.angular.lat/assets/images/logos/angular/angular_whiteTransparent.png'
  constructor() { }

  ngOnInit(): void {
  }

}
