import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularMaterialModule } from '../../shared/Modules/angular-material-module';

@Component({
  selector: 'app-home',
  imports: [AngularMaterialModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
