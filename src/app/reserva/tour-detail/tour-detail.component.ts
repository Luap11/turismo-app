import { Component } from '@angular/core';
import { AuthRoutingModule } from "../../auth/auth-routing.module";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tour-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tour-detail.component.html',
  styleUrl: './tour-detail.component.scss'
})
export class TourDetailComponent {

}
