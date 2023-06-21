import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart.component";

const route: Routes = [
    {
        path: "", component: CartComponent
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(route)],
    exports: []
})

export class CartModule {

}