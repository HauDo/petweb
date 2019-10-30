import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../model/PostModel";

@Component({
  selector: 'app-item-post',
  templateUrl: './item-post.component.html',
  styleUrls: ['./item-post.component.scss']
})
export class ItemPostComponent implements OnInit {

  @Input() itemPost: PostModel

  constructor() { }

  ngOnInit() {
  }

}
