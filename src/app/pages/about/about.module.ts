import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { RouterModule, Routes } from "@angular/router";

const route: Routes = [
    {
        path: "", component: AboutComponent
    }
]


@NgModule({
    declarations: [AboutComponent],
    imports: [RouterModule.forChild(route)],
    exports: []
})

export class AboutModule {

}