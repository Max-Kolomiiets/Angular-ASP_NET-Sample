import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedInUser!: string | null;

  constructor(private alertifyService: AlertifyService) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    this.loggedInUser = localStorage.getItem('token') || null;
    this.loggedInUser = this.loggedInUser?.split('/')[0] || null;
    return localStorage.getItem('token');
  }

  onLogOut() {
    if (localStorage.getItem('token') === null) return;
    localStorage.removeItem('token');
    this.alertifyService.error("You logged out!");
  }
}
