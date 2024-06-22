import { Injectable } from '@angular/core';

export interface People{
  ids:number;
  name:string;
  Technology : string;
  Born: string,
  NetWorth: string,
  About: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private people : People[]= [
    {ids:1 , name: 'Elon Musk' , Technology: 'Java' ,Born:'June 28, 1971', NetWorth:'$190 billion ' , About: 'Elon Reeve Musk (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a businessman and investor. He is the founder, chairman, CEO, and CTO of SpaceX; angel investor, CEO, product architect, and former chairman of Tesla, Inc.; owner, executive chairman, and CTO of X Corp.; founder of the Boring Company and xAI; co-founder of Neuralink and OpenAI;' },
    {ids:2 , name: 'Sundar Pichai' , Technology: 'Java', Born:' June 10, 1972', NetWorth:'$190 billion ' , About: 'Pichai began his career as a materials engineer. Following a short stint at the management consulting firm McKinsey & Co., Pichai joined Google in 2004,[9] where he led the product management and innovation efforts for a suite of Googles client software products, including Google Chrome and ChromeOS, as well as being largely responsible for Google Drive.'},
    {ids:3 , name: 'ehehe' , Technology: 'Java', Born:'June 28, 1971', NetWorth:'$190 billion ' , About: 'Elon Reeve Musk (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a businessman and investor. He is the founder, chairman, CEO, and CTO of SpaceX; angel investor, CEO, product architect, and former chairman of Tesla, Inc.; owner, executive chairman, and CTO of X Corp.; founder of the Boring Company and xAI; co-founder of Neuralink and OpenAI;'},
    {ids:4 , name: 'haha' , Technology: 'Java', Born:'June 28, 1971', NetWorth:'$190 billion ' , About: 'Elon Reeve Musk (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a businessman and investor. He is the founder, chairman, CEO, and CTO of SpaceX; angel investor, CEO, product architect, and former chairman of Tesla, Inc.; owner, executive chairman, and CTO of X Corp.; founder of the Boring Company and xAI; co-founder of Neuralink and OpenAI;'},
  ];

  constructor() { }
  getPeople(){
    return this.people;
  }

  getPersonById(id:number){
    return this.people.find(person => person.ids === id);
  }
}
