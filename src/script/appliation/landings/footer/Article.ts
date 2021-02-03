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

    const foreword = new ElementBuilder('div', '', ['id', 'foreword']);
    foreword.element.innerHTML = postEn.foreword;

    const description = new ElementBuilder('div', '', ['id', 'description']);
    const descriptionTitle = new ElementBuilder('h4', '');
    descriptionTitle.element.innerHTML = postEn.descriptionTitle;
    const descriptionItemOne = new ElementBuilder('div', 'article-item');
    descriptionItemOne.element.innerHTML = postEn.descriptionItemOne;
    const descriptionItemTwo = new ElementBuilder('div', 'article-item');
    descriptionItemTwo.element.innerHTML = postEn.descriptionItemTwo;
    const descriptionItemThree = new ElementBuilder('div', 'article-item');
    descriptionItemThree.element.innerHTML = postEn.descriptionItemThree;
    description.append(descriptionTitle, descriptionItemOne, descriptionItemTwo, descriptionItemThree);
    const wrapImg1 = new ElementBuilder('div', 'wrap-img');
    const articleImg1 = new ElementBuilder('img', '', ['src', 'screen01.png'],['alt', '']);
    wrapImg1.append(articleImg1);
    const descriptionItemThree2 = new ElementBuilder('div', '');
    descriptionItemThree2.element.innerHTML = postEn.descriptionItemThree2;
    const wrapImg2 = new ElementBuilder('div', 'wrap-img');
    const articleImg2 = new ElementBuilder('img', '', ['src', 'screen02.png'],['alt', '']);
    wrapImg2.append(articleImg2);
    const descriptionItemThree3 = new ElementBuilder('div', '');
    descriptionItemThree3.element.innerHTML = postEn.descriptionItemThree3;
    const wrapImg3 = new ElementBuilder('div', 'wrap-img');
    const articleImg3 = new ElementBuilder('img', '', ['src', 'screen03.png'],['alt', '']);
    wrapImg3.append(articleImg3);
    const descriptionItemThree4 = new ElementBuilder('div', '');
    descriptionItemThree4.element.innerHTML = postEn.descriptionItemThree4;
    const wrapImg4 = new ElementBuilder('div', 'wrap-img');
    const articleImg4 = new ElementBuilder('img', '', ['src', 'screen04.png'],['alt', '']);
    wrapImg4.append(articleImg4);
    const descriptionItemThree5 = new ElementBuilder('div', '');
    descriptionItemThree5.element.innerHTML = postEn.descriptionItemThree5;
    const wrapImg5 = new ElementBuilder('div', 'wrap-img');
    const articleImg5 = new ElementBuilder('img', '', ['src', 'screen05.png'],['alt', '']);
    wrapImg5.append(articleImg5);
    const descriptionItemThree6 = new ElementBuilder('div', '');
    descriptionItemThree6.element.innerHTML = postEn.descriptionItemThree6;
    description.append(wrapImg1, descriptionItemThree2, wrapImg2, descriptionItemThree3, wrapImg3, descriptionItemThree4, wrapImg4, descriptionItemThree5, wrapImg5, descriptionItemThree6);

    const teamWork = new ElementBuilder('div', '', ['id', 'teamWork']);
    const teamWorkTitle = new ElementBuilder('h4', '');
    teamWorkTitle.element.innerHTML = postEn.teamWorkTitle;
    const teamWorkItemOne = new ElementBuilder('div', 'article-item');
    teamWorkItemOne.element.innerHTML = postEn.teamWorkItemOne;
    const teamWorkItemTwo = new ElementBuilder('div', 'article-item');
    teamWorkItemTwo.element.innerHTML = postEn.teamWorkItemTwo;
    const teamWorkItemThree = new ElementBuilder('div', 'article-item');
    teamWorkItemThree.element.innerHTML = postEn.teamWorkItemThree;
    teamWork.append(teamWorkTitle, teamWorkItemOne, teamWorkItemTwo, teamWorkItemThree);

    const architecture = new ElementBuilder('div', '', ['id', 'architecture']);
    const architectureTitle = new ElementBuilder('h4', '');
    architectureTitle.element.innerHTML = postEn.architectureTitle;
    const architectureItemOne = new ElementBuilder('div', 'article-item');
    architectureItemOne.element.innerHTML = postEn.architectureItemOne;

    const architectureItemTwo = new ElementBuilder('div', 'article-item');
    const architectureItemTwoTitle = new ElementBuilder('div', '');
    architectureItemTwoTitle.element.innerHTML = postEn.architectureItemTwoTitle;

    const architectureItemTwo1 = new ElementBuilder('div', '');
    architectureItemTwo1.element.innerHTML = postEn.architectureItemTwo1;
    const wrapImg6 = new ElementBuilder('div', 'wrap-img');
    const articleImg6 = new ElementBuilder('img', '', ['src', 'screen06.png'],['alt', '']);
    wrapImg6.append(articleImg6);
    const architectureItemTwo2 = new ElementBuilder('div', '');
    architectureItemTwo2.element.innerHTML = postEn.architectureItemTwo2;

    const architectureItemTwo3 = new ElementBuilder('div', '');
    architectureItemTwo3.element.innerHTML = postEn.architectureItemTwo3;
    const wrapImg7 = new ElementBuilder('div', 'wrap-img');
    const articleImg7 = new ElementBuilder('img', '', ['src', 'screen07.png'],['alt', '']);
    wrapImg7.append(articleImg7);
    const architectureItemTwo4 = new ElementBuilder('div', '');
    architectureItemTwo4.element.innerHTML = postEn.architectureItemTwo4;

    const architectureItemTwo5 = new ElementBuilder('div', '');
    architectureItemTwo5.element.innerHTML = postEn.architectureItemTwo5;
    const wrapImg8 = new ElementBuilder('div', 'wrap-img');
    const articleImg8 = new ElementBuilder('img', '', ['src', 'screen08.png'],['alt', '']);
    wrapImg8.append(articleImg8);
    const architectureItemTwo6 = new ElementBuilder('div', '');
    architectureItemTwo6.element.innerHTML = postEn.architectureItemTwo6;

    const architectureItemTwo7 = new ElementBuilder('div', '');
    architectureItemTwo7.element.innerHTML = postEn.architectureItemTwo7;
    const wrapImg9 = new ElementBuilder('div', 'wrap-img');
    const articleImg9 = new ElementBuilder('img', '', ['src', 'screen09.png'],['alt', '']);
    wrapImg9.append(articleImg9);
    const architectureItemTwo8 = new ElementBuilder('div', '');
    architectureItemTwo8.element.innerHTML = postEn.architectureItemTwo8;
    const wrapImg10 = new ElementBuilder('div', 'wrap-img');
    const articleImg10 = new ElementBuilder('img', '', ['src', 'screen10.png'],['alt', '']);
    wrapImg10.append(articleImg10);
    const architectureItemTwo9 = new ElementBuilder('div', '');
    architectureItemTwo9.element.innerHTML = postEn.architectureItemTwo9;
    const wrapImg11 = new ElementBuilder('div', 'wrap-img');
    const articleImg11 = new ElementBuilder('img', '', ['src', 'screen11.png'],['alt', '']);
    wrapImg11.append(articleImg11);

    architectureItemTwo.append(architectureItemTwoTitle,  architectureItemTwo1, wrapImg6, architectureItemTwo2, architectureItemTwo3, wrapImg7, architectureItemTwo4, architectureItemTwo5, wrapImg8, architectureItemTwo6, architectureItemTwo7, wrapImg9, architectureItemTwo8, wrapImg10, architectureItemTwo9, wrapImg11);

    const architectureItemThree = new ElementBuilder('div', 'article-item');
    architectureItemThree.element.innerHTML = postEn.architectureItemThree;

    architecture.append(architectureTitle, architectureItemOne, architectureItemTwo, architectureItemThree);

    const progress = new ElementBuilder('div', '', ['id', 'progress']);
    const progressTitle = new ElementBuilder('h4', '');
    progressTitle.element.innerHTML = postEn.progressTitle;
    const progressItemOne = new ElementBuilder('div', 'article-item');
    progressItemOne.element.innerHTML = postEn.progressItemOne;
    const progressItemTwo = new ElementBuilder('div', 'article-item');
    progressItemTwo.element.innerHTML = postEn.progressItemTwo;
    const wrapImgLog = new ElementBuilder('div', 'wrap-img');
    const articleImgLog = new ElementBuilder('img', '', ['src', 'changeLog.png'],['alt', '']);
    wrapImgLog.append(articleImgLog);
    const progressItemThree = new ElementBuilder('div', 'article-item');
    progressItemThree.element.innerHTML = postEn.progressItemThree;
    const wrapImgLog2 = new ElementBuilder('div', 'wrap-img');
    const articleImgLog2 = new ElementBuilder('img', '', ['src', 'in.png'],['alt', '']);
    wrapImgLog2.append(articleImgLog2);
    const progressItemFour = new ElementBuilder('div', 'article-item');
    progressItemFour.element.innerHTML = postEn.progressItemFour;
    progress.append(progressTitle, progressItemOne, progressItemTwo, wrapImgLog, wrapImgLog2, progressItemThree, progressItemFour);

    const conclusion = new ElementBuilder('div', '', ['id', 'conclusion']);
    const conclusionTitle = new ElementBuilder('h4', '');
    conclusionTitle.element.innerHTML = postEn.conclusionTitle;
    const conclusionItemOne = new ElementBuilder('div', 'article-item');
    conclusionItemOne.element.innerHTML = postEn.conclusionItemOne;
    const wrapImgEnd = new ElementBuilder('div', 'wrap-img');
    const articleImgEnd = new ElementBuilder('img', '', ['src', 'imgEnd.png'],['alt', '']);
    wrapImgEnd.append(articleImgEnd);
    conclusion.append(conclusionTitle, conclusionItemOne, wrapImgEnd);

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
