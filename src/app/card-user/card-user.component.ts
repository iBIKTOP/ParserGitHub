import { Component, OnInit } from '@angular/core';
import { CardUserService } from './card-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  name: string;
  avatar: string;
  url: string;
  constructor(private cardUserService: CardUserService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(({ username }) => {
      this.cardUserService.getDataUser(username).subscribe((data: any) => {
        console.log(data);
        this.name = data.login;
        this.avatar = data.avatar_url;
        this.url = data.html_url;
      });
    });
  }
}
