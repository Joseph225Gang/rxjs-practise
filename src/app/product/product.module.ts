import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {ProductComponent} from './product.component';
import {ProductEditComponent} from './product-edit.component';
import {ProductDetailComponent} from './product-detail.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
        imports:[
            SharedModule,
            RouterModule.forChild([
                { path:'product', component:ProductComponent},
                { path: 'products/:id/edit', component: ProductEditComponent },
                { path: 'productDetail', component: ProductDetailComponent }
            ])
        ],
        declarations:[
            ProductComponent,
            ProductEditComponent,
            ProductDetailComponent
        ]
    })

export class ProductModule{}