import {NgModule, Component} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { LoginPageComponent } from './login-page/login-page.component'
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component'
import { SiteLayoutComponent } from './shared/layout/site-layout/site-layout.component'
import { RegisterPageComponent } from './register-page/register-page.component'

const routes: Routes = [
    {path: '', component: AuthLayoutComponent, children: [
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
  ]
},
{    path: '', component: SiteLayoutComponent, children: [
    
    ]

}
                        ]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}