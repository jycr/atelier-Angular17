import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

export default [
  {
    path: 'recipes', loadChildren: () => import('./recipe/recipe-routing')
  },
  {
    path: '', redirectTo: '/recipes', pathMatch: 'full'
  }
] as Route[];