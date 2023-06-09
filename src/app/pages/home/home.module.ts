import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";

const route: Routes = [
    {
        path: "", component: HomeComponent
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(route)],
    exports: []
})

export class HomeModule {

}