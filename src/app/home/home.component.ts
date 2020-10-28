// import * as $ from 'jquery';
import { Component, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {

    // $(document).ready(function( $ ) {

    //   $(window).scroll(function() {
    //     $('.si').each(function() {
    //       var imagePos = $(this).offset().top;
    
    //       var topOfWindow = $(window).scrollTop();
    //       if (imagePos < topOfWindow + 400) {
    //         $(this).addClass("slideUp");
    //       }
    //     });
    //   });
    
    // });
  }


  
}
