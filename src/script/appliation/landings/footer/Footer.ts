// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';
// @ts-ignore
import Article from './Article.ts';

export default class Footer {
  public container: ElementBuilder;

  private article: Article;

  constructor() {
    this.container = new ElementBuilder('div', 'downPage');
    this.article = new Article();
    this.container.append(this.article.container, this.article.container1, this.article.container2);
  }
}
