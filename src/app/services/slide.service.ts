import { Injectable } from '@angular/core';
import { ISlide } from '../models/slide.model';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  slides:ISlide[];
  constructor() {
    this.loadMockslides();
   }

  /**
   * Get all the slides from the API.  Including the Root.
   * @returns an array of slides.
   */
  getSlides():ISlide[]{
    return this.slides;
  }

  /**
   * Get a single slide by id.
   * @param id of the requested slide.
   * @returns a single instance of Islide.
   */
  getSlide(id:number):ISlide{
    let slide = this.slides.find(s => s.id === id);
    return slide;
  }
  /**
   * Post a slide to the API.
   * @param slide to be posted to API.
   * @returns the index of the slide.
   */
  postSlide(slide:ISlide):number{
    slide.id = Math.max(...this.slides.map(s => s.id));
    this.slides.push(slide);
    return slide.id;
  }

  /**
   * Updates the slide.  Simply replaces whole slide with parameter.
   * @param slide to be updated.
   * @returns id of the slide updated.
   */
  updateSlide(slide:ISlide):number{
    const index = this.slides.findIndex(s => s.id === slide.id);
    this.slides[index] = slide;
    return this.slides[index].id;
  }

  /**
   * Delete a slide from the API.
   * @param id of the slide to be deleted.
   * @returns boolean if the slide id was found and deleted.
   */
  deleteslide(id:number):boolean{
    const index = this.slides.findIndex(s => s.id === id);
    if(index === undefined){
      return false;
    }
    else{
      this.slides.splice(index, 1);
      return true;
    }
  }

  /**
   * Private method to mock the API.  Will be replaced for production build.
   */
  private loadMockslides(){
    this.slides = [{
      id:1,
      imgUrl: "https://i0.wp.com/greenandgold.uaa.alaska.edu/wp-content/uploads/2018/08/Candace-Blas-Photo-1-copy.jpg?resize=600%2C400",
      redirectUrl: "http://greenandgold.uaa.alaska.edu/blog/66061/building-better-homes-investing-community/",
      name: "Building better homes",
      altText: "Candice Blas in church",
      caption: "Candace Blas is a lifetime Anchorage resident, UAA alumna in international studies and the manager of the Church of Love — a cultural hub and neighborhood center located in the heart of the Spenard neighborhood. (Photo by James Evans / University of Alaska Anchorage)",
      displayOption: 'cover',
      displayTime: 5, //in seconds
      enabled: true,
      order:1
    },{
      id:2,
      imgUrl: "https://i2.wp.com/greenandgold.uaa.alaska.edu/wp-content/uploads/2018/08/180807-DELLA-KEATS-LAB-JRE-0167.jpg?resize=600%2C400",
      redirectUrl: "http://greenandgold.uaa.alaska.edu/blog/66020/della-keats-health-sciences-summer-program-opens-doors-teens-considering-medical-field/",
      name: "Health Sciences Summer Program",
      altText: "Dr. Kathryn Milligan-Myhre",
      caption: "Dr. Kathryn Milligan-Myhre, right, leads a microbiology and genetics lab for high school students in the Della Keats Health Sciences Summer Program. (Photo by James Evans / University of Alaska Anchorage)",
      displayOption: 'cover',
      displayTime: 5, //in seconds
      enabled: true,
      order:2
    },{
      id:3,
      imgUrl: "https://i1.wp.com/greenandgold.uaa.alaska.edu/wp-content/uploads/2018/08/Nicholas-Taylor-Photo-1.jpg?resize=600%2C400",
      redirectUrl: "http://greenandgold.uaa.alaska.edu/blog/65969/anthropology-senior-star-sprinter-continues-break-ground/",
      name: "Anthropology breaking ground.",
      altText: "Nicholas Taylor",
      caption: "Nicholas Taylor is a record-holding sprinter for UAA’s track and field team and a senior majoring in anthropology with an emphasis on archaeology. Earlier this summer, Taylor partook on his first archaeological dig at the historic Swan Lake, the oldest identified human establishment in North America, estimated to be around 14,200 years old. (Photo courtesy of UAA Athletics).",
      displayOption: 'cover',
      displayTime: 5, //in seconds
      enabled: true,
      order:3
    }];
  }

}

