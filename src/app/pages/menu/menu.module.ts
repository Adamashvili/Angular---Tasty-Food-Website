import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu.component";
import { RouterModule, Routes } from "@angular/router";

const route: Routes = [
    {
        path: "", component: MenuComponent
    }
]


@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(route)],
    exports: []
})

export class MenuModule {

}