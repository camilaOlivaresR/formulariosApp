import { NgModule } from "@angular/core";


import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
{
    path: 'template',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
},
{
    path: 'reactive',
    loadChildren: () => import('./reactiv/reactiv.module').then(m => m.ReactivModule)
},
{
    path: '**',
    redirectTo: 'template'
}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{} 