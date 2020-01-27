import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {DashboardComponent} from './dashboard.component';
import {DataResolverService} from './data-resolver.service';
import {DataService} from './data.service';

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {
                path: 'dashboard',
                component: DashboardComponent,
                resolve: {
                  userdata: DataResolverService
                }
              },
        ])
    ],
    declarations:[
        DashboardComponent
    ],
    providers:[DataService,
        DataResolverService]
})

export class DashboardModule{}