import { Routes } from '@angular/router';
import { AddProduct } from './components/add-product/add-product';
import { ProductList } from './components/product-list/product-list';
import { Update } from './components/update/update';

export const routes: Routes = [
    {
        path:'product',
        component: ProductList
    },
    {
        path: 'add',
        component: AddProduct
    },
    {
        path: 'update',
        component: Update
    }
];
