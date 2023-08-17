import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
 appdata = [{
    jobexpreices :[
      {
        title : "Avenue Design Info Tech",
        details : "Web Design and Development: In the digital age. Our expert web designers and developer......",
        jobdetail : "Angular Developer",
        experience:"2years",
        dateofpost:"2days"

      },
    
      {
        title : "Amazon Web Services (AWS)",
        details : "Web Design and Development: In the digital age. Our expert web designers and developer......",
        jobdetail : "SASS Developer",
        experience:"2 years",
        dateofpost:"2days"
      },
      {
        title : "IBM (International Business Machines Corporation",
        details : "Web Design and Development: In the digital age. Our expert web designers and developer......",
        jobdetail : ".NET Developer",
        experience:"2years",
        dateofpost:"2days"
      },
      {
        title : "Dell Technologies Inc",
        details : "Web Design and Development: In the digital age. Our expert web designers and developer......",
        jobdetail : ".NET Developer",
        experience:"2years",
        dateofpost:"2days"
      },
    ],
     backendjob :[
      {
        title : "Avenue Design Info Tech",
        details : "Web Design and Development: In the digital age. Our expert web designers and developer......",   
        jobdetail : "Backend Developer",
        experience:"2years",
        dateofpost:"2days"

      },
      {
        title : "Microsoft Corporation",
        details : "Web Design and Development: In the digital age. Our expert web designers and developer......",
        jobdetail : "Database Administrator (DBA)",
        experience:"2years",
        dateofpost:"2days"
      },
      {
        title : "Amazon Web Services (AWS)",
        details : "Web Design and Development: In the digital age. Our expert web designers and developer......",
        jobdetail : "Systems Administrator",
        experience:"3 years",
        dateofpost:"2days"
      },
      {
        title : "IBM (International Business Machines Corporation",
        details : "Web Design and Development: In the digital age. Our expert web designers and developer......",
        jobdetail : "Cloud Enginee",
        experience:"2years",
        dateofpost:"2days"
      },

    ]
 }
]
    newdata: any;
   olddata:any;

  ngOnInit(){
    console.log(this.appdata);
    for(let i of this.appdata){
      this.newdata = i.jobexpreices ;
      this.olddata = i.backendjob ;
    }
 
   
  }
}
