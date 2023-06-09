import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { RouterModule, Routes } from "@angular/router";

const route: Routes = [
    {
        path: "", component: ContactComponent
    }
]


@NgModule({
    declarations: [ContactComponent],
    imports: [RouterModule.forChild(route)],
    exports: []
})

export class ContactModule {

}