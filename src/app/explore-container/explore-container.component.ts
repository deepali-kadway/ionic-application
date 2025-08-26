import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: false,
})
export class ExploreContainerComponent {

  // @Input() name?: string;
  constructor(private router: Router){}

navigateToContact(){
this.router.navigate(['/tabs/tab3'])
}

}
