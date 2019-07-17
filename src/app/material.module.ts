import { NgModule } from "@angular/core";
import * as NG_MAT from "@angular/material";

const MATERIAL_MODULES = [
  NG_MAT.MatPaginatorModule,
  NG_MAT.MatTableModule,
  NG_MAT.MatSidenavModule,
  NG_MAT.MatIconModule,
  NG_MAT.MatButtonModule,
  NG_MAT.MatCardModule,
  NG_MAT.MatInputModule,
  NG_MAT.MatListModule,
  NG_MAT.MatToolbarModule,
  NG_MAT.MatGridListModule
];
@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MyMaterialModule {}
