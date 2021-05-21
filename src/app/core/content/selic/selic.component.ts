import { Component, OnInit } from '@angular/core';
import { faEllipsisV, faShareSquare, faBug, faBan, faDownload } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-selic',
  templateUrl: './selic.component.html',
  styleUrls: ['./selic.component.scss']
})
export class SelicComponent implements OnInit {

  faEllipsisV = faEllipsisV;
  faShareSquare = faShareSquare;
  faBug = faBug;
  faBan = faBan;
  faDownload = faDownload;

  isShow = [false, false, false, false, false, false];

  constructor() { }

  ngOnInit(): void {
  }

  public showMenu (i: number, v: boolean) {
    this.isShow = [false, false, false, false, false, false];;
    this.isShow[i] = v;

    console.log(v)
  }
}
