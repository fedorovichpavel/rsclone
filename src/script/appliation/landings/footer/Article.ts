// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';
// @ts-ignore
import postEn from './PostEn.ts';

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
    wrap.append(article);

    const header = new ElementBuilder('header', 'article-header');
    const nav = new ElementBuilder('nav', 'article-nav');
    header.element.innerHTML = postEn.title;
    nav.element.innerHTML = postEn.nav;

    const content = new ElementBuilder('div', 'article-content');
    article.append(header, nav, content);

    const foreword = new ElementBuilder('div', '');
    // foreword.setDataAtr('id', 'foreword');
    foreword.element.innerHTML = postEn.foreword;

    const description = new ElementBuilder('div', '');
    // description.setDataAtr('id', 'description');
    const descriptionTitle = new ElementBuilder('h4', '');
    descriptionTitle.element.innerHTML = postEn.descriptionTitle;
    const descriptionItemOne = new ElementBuilder('div', 'article-item');
    descriptionItemOne.element.innerHTML = postEn.descriptionItemOne;
    const descriptionItemTwo = new ElementBuilder('div', 'article-item');
    descriptionItemTwo.element.innerHTML = postEn.descriptionItemTwo;
    const descriptionItemThree = new ElementBuilder('div', 'article-item');
    descriptionItemThree.element.innerHTML = postEn.descriptionItemThree;
    description.append(descriptionTitle, descriptionItemOne, descriptionItemTwo, descriptionItemThree);

    const teamWork = new ElementBuilder('div', '');
    // teamWork.setDataAtr('id', 'teamwork');
    const teamWorkTitle = new ElementBuilder('h4', '');
    teamWorkTitle.element.innerHTML = postEn.teamWorkTitle;
    const teamWorkItemOne = new ElementBuilder('div', 'article-item');
    teamWorkItemOne.element.innerHTML = postEn.teamWorkItemOne;
    const teamWorkItemTwo = new ElementBuilder('div', 'article-item');
    teamWorkItemTwo.element.innerHTML = postEn.teamWorkItemTwo;
    const teamWorkItemThree = new ElementBuilder('div', 'article-item');
    teamWorkItemThree.element.innerHTML = postEn.teamWorkItemThree;
    teamWork.append(teamWorkTitle, teamWorkItemOne, teamWorkItemTwo, teamWorkItemThree);

    const architecture = new ElementBuilder('div', '');
    // architecture.setDataAtr('id', 'architecture');
    const architectureTitle = new ElementBuilder('h4', '');
    architectureTitle.element.innerHTML = postEn.architectureTitle;
    architecture.append(architectureTitle);

    const progress = new ElementBuilder('div', '');
    // progress.setDataAtr('id', 'progress');
    const progressTitle = new ElementBuilder('h4', '');
    progressTitle.element.innerHTML = postEn.progressTitle;
    progress.append(progressTitle);

    const conclusion = new ElementBuilder('div', '');
    // conclusion.setDataAtr('id', 'conclusion');
    const conclusionTitle = new ElementBuilder('h4', '');
    conclusionTitle.element.innerHTML = postEn.conclusionTitle;
    conclusion.append(conclusionTitle);

    content.append(foreword, description, teamWork, architecture, progress, conclusion);

    this.container1.append(wrap);
  }

  createFooterBlocks() {
    const div = new ElementBuilder('div', 'authors');
    const div1 = new ElementBuilder('div', 'footerDiv1');
    const div2 = new ElementBuilder('div', 'footerDiv2');
    const h3 = new ElementBuilder('h3', '');
    h3.element.innerHTML = 'Powered by:';
    const a1 = new ElementBuilder('a', 'animation', ['href', 'https://github.com/mig-marina']);
    const a2 = new ElementBuilder('a', 'animation', ['href', 'https://github.com/mikhail-hursky']);
    const a3 = new ElementBuilder('a', 'animation', ['href', 'https://github.com/fedorovichpavel']);
    const p = new ElementBuilder('p', '');
    const footerLogoUrl = new ElementBuilder('a', '', ['href', 'https://rs.school/']);
    const footerLogo = new ElementBuilder('img', '', ['src', 'rs.svg'], ['alt', 'rs-logo']);
    p.element.innerHTML = '2021';
    a1.element.innerHTML = 'Marina M.';
    a2.element.innerHTML = 'Mikhail H.';
    a3.element.innerHTML = 'Pavel F.';
    footerLogoUrl.append(footerLogo);
    div1.append(h3, a1, a2, a3);
    div2.append(footerLogoUrl, p);
    div.append(div1, div2);
    this.container2.append(div);
  }
}
