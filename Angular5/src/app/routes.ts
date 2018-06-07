import { VeiculoComponent } from './Components/veiculo/veiculo.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { DemoComponent } from './Components/demo/demo.component';
import { AjudaComponent } from './Components/ajuda/ajuda.component';
import { SobreComponent } from './Components/sobre/sobre.component';
import { MoradorComponent } from './Components/morador/morador.component';
import { VisitanteComponent } from './Components/visitante/visitante.component';




export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
    { path: 'forbidden', component: ForbiddenComponent, canActivate: [AuthGuard] },
    { path: 'adminPanel', component: AdminPanelComponent, canActivate: [AuthGuard] , data: { roles: ['Admin'] }},
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path : '', redirectTo: '/login', pathMatch : 'full'},
    { path: 'demo', component: DemoComponent, canActivate: [AuthGuard] },
    { path: 'morador', component: MoradorComponent, canActivate: [AuthGuard] },
    { path: 'sobre', component: SobreComponent, canActivate: [AuthGuard] },
    { path: 'ajuda', component: AjudaComponent, canActivate: [AuthGuard] },
    { path: 'visitante', component: VisitanteComponent, canActivate: [AuthGuard] },
    { path: 'veiculo', component: VeiculoComponent, canActivate: [AuthGuard] }


];
