import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../../services/articles.service";
import {Article} from "../../models/article";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {


  articles: Article[] = [];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
  }



  loadData() {
    this.articleService.getData().subscribe((data:Article[]) => this.articles = data);
  }
}
