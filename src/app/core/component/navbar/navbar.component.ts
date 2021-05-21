import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faHome, faPercentage, faCreditCard, faExchangeAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faBars = faBars;
  faHome = faHome;
  faPercentage = faPercentage;
  faCreditCard = faCreditCard;
  faExchangeAlt = faExchangeAlt;
  faTimes = faTimes;

  isOpen = false;

  url = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url
    console.log(this.router.url)
  }

}
