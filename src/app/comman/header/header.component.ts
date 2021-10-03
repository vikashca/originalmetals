import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".navbar-nav li").on('click', function(){
      $(".navbar-nav li.active").removeClass('active')
      $(this).addClass('active')
    })
  }

}
