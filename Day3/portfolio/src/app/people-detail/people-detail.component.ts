import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { DataService, People } from '../data.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.css'
})
export class PeopleDetailComponent {

PersonId !: number;
pesone : People[];
constructor(private router :Router, private route: ActivatedRoute , private dataSevice: DataService) {
  this.pesone = this.dataSevice.getPeople();
}

ngOnInit() : void {
  this.route.paramMap.subscribe(params => {
    const idParam = params.get('id');
    if(idParam != null) {
      this.PersonId =+idParam;
    }
  });
}

}
