import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {
  newsList = [
    {
      id: 1,
      image: '../../../assets/imgs/news/news-1.jpeg',
      category: 'Beauty   /   july 22, 2021',
      title: 'New York Fashion Show, Looks and More',
      price: '',
      description:
        'The only way to do something in depth is to work hard. I like the irony in my work. I like the irony in my work. I love a black dress. Men don’t want another man to look.',
    },
    {
      id: 2,
      image: '../../../assets/imgs/news/news-2.jpeg',
      category: 'clothing   /   july 22, 2021',
      title: 'favourite online fashion stores for designer outfit',
      price: '',
      description:
        'I like the irony in my work. I love a black dress. Men don’t want another man to look. The only way to do something in depth is to work hard',
    },
    {
      id: 3,
      image: '../../../assets/imgs/news/news-3.jpeg',
      category: 'fashion   /   july 22, 2021',
      title: 'Basic Fashion Rules Every Woman Should Know',
      price: '',
      description:
        'I love a black dress. Men don’t want another man to look. The only way to do something in depth is to work hard. I like the irony in my work. I like the irony in my work.dress.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
