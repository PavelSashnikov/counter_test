import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Routing } from './entities/routing/routing.namespace';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: Routing.Path.login,
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: Routing.Path.home,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  { path: '', redirectTo: Routing.Path.home, pathMatch: 'full' },
  { path: '**', redirectTo: Routing.Path.home, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
