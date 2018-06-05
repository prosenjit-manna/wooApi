# WooApi
Woocommerce API service with angular

## Api Doc
https://angular-studio.github.io/wooApi/

## Enable CORS
Add this code in function.php

```
add_action( 'init', 'nt_cors_enable' );

function nt_cors_enable() {
  header("Access-Control-Allow-Origin: " . get_http_origin());
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Headers: Authorization, Content-Type");
  header("Access-Control-Expose-Headers: x-wc-totalpages, x-wc-total", false);
  if ( 'OPTIONS' == $_SERVER['REQUEST_METHOD'] ) {
    status_header(200);
    exit();
  }
}
```

## Setup instruction

- `yarn add ngx-wooapi` or `npm install --save ngx-wooapi`
- Add interceptor https://gist.github.com/5ce00228883ce6166e65b9eb1862c7c7

Add this code in your app.module.ts

```
 providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
 ]

```
Add new property in environment.ts for angular webapp 

```
origin: 'https://domain/appwoo/wc-api/v3',
  woocommerce: {
    consumer_key:  'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    consumer_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  }
```

Add new providers in app.module 
```
import {
  WoocommerceProductsService,
  WoocommerceHelperService
} from 'ngx-wooapi';
```
Add these providers in providers array

```
providers: [
  WoocommerceProductsService,
  WoocommerceHelperService
]
```

Now use it in component

```
import {
  WoocommerceProductsService
} from 'ngx-wooapi';

constructor(
    private wooProducs: WoocommerceProductsService
  ) { }

  ngOnInit() {
    this.wooProducs.retriveProducts().subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err);
    });
  }

```

All done have fun :)