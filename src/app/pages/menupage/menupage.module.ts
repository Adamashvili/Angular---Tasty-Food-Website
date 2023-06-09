import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenupageComponent } from "./menupage.component";

const route: Routes = [
    {
        path: "", component: MenupageComponent
    }
]


@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(route)],
    exports: []
})

export class MenuPageModule {

}