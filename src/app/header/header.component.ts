import {Component, OnInit} from '@angular/core';
import {PostModel} from "../model/PostModel";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  posts: PostModel[] = [
    {
      id: 1,
      title: "Post 1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3m9ro-LtDDSocxdFSlvFRm1KzzJB879xx1R0DY3lIIw0-w9ttqg&s",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at felis lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque urna metus, dignissim et porta a, congue nec tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce at magna id ipsum iaculis aliquam. Class aptent taciti sociosqu ad litora torquent per conu",
      categories: [
        "Cate 1",
        "Cate 2",
      ]
    }, {
      id: 2,
      title: "Post 2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qdpRmyvhEgjzc_bocnGsFJRH0VrADGBVhs_aQbdysvOWz-ap&s",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at felis lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque urna metus, dignissim et porta a, congue nec tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce at magna id ipsum iaculis aliquam. Class aptent taciti sociosqu ad litora torquent per conu",
      categories: [
        "Cate 1",
      ]
    }, {
      id: 3,
      title: "Post 3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpj2iRoAPe0-WwYkUgUddhBiZfEzYkFa5_T1ONgkgSMtbV7lL&s",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at felis lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque urna metus, dignissim et porta a, congue nec tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce at magna id ipsum iaculis aliquam. Class aptent taciti sociosqu ad litora torquent per conu",
      categories: [
        "Cate 1",
        "Cate 2",
        "Cate 3",
      ]
    }, {
      id: 4,
      title: "Post 4",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TEAFHYQ6VpKZuYVuDUNAj7xYE6ICBjzu6HkmGBeyXz3UILFq&s",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at felis lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque urna metus, dignissim et porta a, congue nec tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce at magna id ipsum iaculis aliquam. Class aptent taciti sociosqu ad litora torquent per conu",
      categories: [
        "Cate 2",
        "Cate 4",
      ]
    }, {
      id: 5,
      title: "Post 5",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6XN5MFU9Scder_uu0knQHlC09TotQ__62pkO2Gvf4Jsf9-5p&s",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at felis lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque urna metus, dignissim et porta a, congue nec tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce at magna id ipsum iaculis aliquam. Class aptent taciti sociosqu ad litora torquent per conu",
      categories: [
        "Cate 1",
        "Cate 4",
      ]
    }, {
      id: 6,
      title: "Post 6",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/32/cb/a2/selfie-background.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at felis lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque urna metus, dignissim et porta a, congue nec tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce at magna id ipsum iaculis aliquam. Class aptent taciti sociosqu ad litora torquent per conu",
      categories: [
        "Cate 1",
        "Cate 6",
      ]
    },
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
