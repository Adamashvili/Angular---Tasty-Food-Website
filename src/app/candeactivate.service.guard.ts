import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { Observable } from "rxjs";

export class CanDeactivateService implements CanDeactivate<LoginComponent> {
    canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(sessionStorage.getItem("UserInfo")!=null) {
            return true
          } else {
            return false
          }
    }

}