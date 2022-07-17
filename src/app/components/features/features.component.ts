import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  featuresList = [
    {
      id: 1,
      name: 'Free delivery',
      icon: 'fa fa-shopping-cart',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
    },
    {
      id: 2,
      name: '100% secure payment',
      icon: 'fa fa-shield-alt',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
    },
    {
      id: 3,
      name: 'Quality guarantee',
      icon: 'fa fa-medal',

      desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
    },
    {
      id: 4,
      name: 'big offers',
      icon: 'fa fa-bookmark',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
