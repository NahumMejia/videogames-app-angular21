import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

const MATERIAL_MODULES = [
  MatAutocompleteModule,
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatDialogModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatListModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSortModule,
  MatSnackBarModule,
  MatSliderModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule,
];

@NgModule({
  imports: [CommonModule, ...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES],
})
export class AngularMaterialModule {}
