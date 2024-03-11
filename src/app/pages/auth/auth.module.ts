import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
// import { AuthLayoutComponent } from 'src/app/commons/layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "iniciar-sesion",
        loadComponent: () =>
          import("./login-page/login-page.component").then(
            (m) => m.LoginPageComponent
          ),
      },
      {
        path: "registro",
        loadComponent: () =>
          import("./subscription/subscription-page.component").then(
            (m) => m.SubscriptionPageComponent
          ),
      },
      {
        path: "",
        redirectTo: "iniciar-sesion",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class AuthModule {}
