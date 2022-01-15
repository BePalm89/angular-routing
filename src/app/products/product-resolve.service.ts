import {Injectable} from '@angular/core';
import {Product, ProductResolved} from './product';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProductService} from './product.service';
import {catchError, map} from 'rxjs/operators';


@Injectable()
export class ProductResolve implements Resolve<ProductResolved>{

    constructor(private productService: ProductService) {
    }

    resolve(activateRoute: ActivatedRouteSnapshot, stateRouter: RouterStateSnapshot): Observable<ProductResolved> {
        const id = activateRoute.paramMap.get('id');
        if (isNaN(+id)) {
            const message = `Product id was not a number: ${id}`;
            console.log(message);
            return of({product: null, error: message});
        }
        return this.productService.getProduct(+id)
            .pipe(
                map(product => ({product})),
                catchError(error => {
                    const message = `Retrieved error: ${error}`;
                    return of({product: null, error: message});
                })
        );
    }
}
