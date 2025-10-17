import { Component } from '@angular/core';
import { AuthRoutingModule } from "../../auth/auth-routing.module";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-tour',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './edit-tour.component.html',
  styleUrl: './edit-tour.component.scss'
})
export class EditTourComponent {

}
