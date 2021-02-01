// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';

export default class Article {
  public container: ElementBuilder;

  public container1: ElementBuilder;

  public container2: ElementBuilder;

  private scroll: ElementBuilder;

  private scroll1: ElementBuilder;

  private slide: ElementBuilder;

  constructor() {
    this.container = new ElementBuilder('div', 'slide blocks');
    this.container1 = new ElementBuilder('div', 'article blocks');
    this.container2 = new ElementBuilder('footer', 'footer blocks');
    this.container.setDataAtr('id', 'slide');
    this.createSlideBlocks();
    this.createArticleBlocks();
    this.createFooterBlocks();
  }

  createSlideBlocks() {
    this.scroll = new ElementBuilder('div', 'scroll');
    this.scroll1 = new ElementBuilder('div', 'scroll');
    this.scroll.setDataAtr('id', 'slide');
    this.scroll1.setDataAtr('id', 'slide');

    this.slide = new ElementBuilder('p', 'artText');
    this.slide.setDataAtr('id', 'slide');
    this.slide.element.innerHTML = 'Article';
    this.container.append(this.scroll1, this.slide, this.scroll);
  }

  createArticleBlocks() {

    const wrap = new ElementBuilder('div', 'wrap-article');
    const article = new ElementBuilder('article', '');
    const header = new ElementBuilder('header', 'article-header');
    const nav = new ElementBuilder('nav', 'article-nav');
    const content = new ElementBuilder('div', 'article-content');

    header.element.innerHTML = '<h3>OMG – Oh, My Games or a series of games "Tetris"</h3>';

    // const h2 = new ElementBuilder('h2', '');
    // const p1 = new ElementBuilder('p', '');
    // const p2 = new ElementBuilder('p', '');
    // h2.element.innerHTML = 'Article';
    // p1.element.innerHTML = 'An article is any member of a class of dedicated words that are used with noun phrases to mark the identifiability of the referents of the noun phrases. The category of articles constitutes a part of speech';
    // p2.element.innerHTML = 'In English, both "the" and "a" are articles, which combine with a noun to form a noun phrase. Articles typically specify grammatical definiteness of the noun phrase, but in many languages they carry additional grammatical information such as gender, number, and case. Articles are part of a broader category called determiners, which also include demonstratives, possessive determiners, and quantifiers. In linguistic interlinear glossing, articles are abbreviated as art';
    // this.container1.append(wrap, h2, p1, p2);
    this.container1.append(wrap);
    wrap.append(article);
    article.append(header, nav, content);
  }

  createFooterBlocks() {
    const div = new ElementBuilder('div', 'authors');
    const h3 = new ElementBuilder('h3', '');
    h3.element.innerHTML = 'Powered by:';
    const a1 = new ElementBuilder('a', 'animation', ['href', 'https://github.com/mig-marina']);
    const a2 = new ElementBuilder('a', 'animation', ['href', 'https://github.com/mikhail-hursky']);
    const a3 = new ElementBuilder('a', 'animation', ['href', 'https://github.com/fedorovichpavel']);
    const p = new ElementBuilder('p', '');
    p.element.innerHTML = '2021';
    a1.element.innerHTML = 'Marina M.';
    a2.element.innerHTML = 'Mikhail H.';
    a3.element.innerHTML = 'Pavel F.';
    div.append(h3, a1, a2, a3, p);
    this.container2.append(div);
  }
}
