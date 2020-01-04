import { Component, OnInit,AfterViewInit } from '@angular/core';
import {fromEvent} from 'rxjs';
import * as $ from "jquery";


@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit()
  {
    var component = this;
    fromEvent(document.querySelector('#textInput'),'keyup')
      .subscribe(e => {
        $('#results').empty();
        component.queryFromWikipedia($('#textInput').val());
      })
  }

  queryFromWikipedia(searchWord:string){
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      dataType: 'jsonp',
      data: {
          action: 'opensearch',
          format: 'json',
          search: searchWord
      },
      success: function(data) {
          let ajaxReturnListWords = [];
          if(data[1])
            ajaxReturnListWords = data[1];
          ajaxReturnListWords.forEach(val => $('#results').append('<li>' + val + '</li>'));
        },
  });
  }

}
