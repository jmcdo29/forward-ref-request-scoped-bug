# forward-ref-request-scoped-bug

When using a `forwardRef` to resolve a circular dependency between two services, and one of the services injects a REQUEST scoped dependency, the other dependency does not see the original one as request scoped, and as such, cannot call the methods of the first dependency. 

To display this, I created three dependencies

* `FooService`
* `BarService`
* `BazService`

`FooService` and `BarService` are circularly dependent. `BazService` is `REQUEST` scoped due to injecting `REQUEST`, but does not use `scope: Scope.REQUEST` in the `@Injectable()` decorator. `FooService` injects `BazService` making it implicitly `REQUEST` scoped. 

When an HTTP request is made to `/`, `FooService` calls to `BarService`, but `AppController` cannot call `getBar` of `FooService` due to the implicit request scoping, and the `FooService` not actually being created on the request.

## How to reproduce

1) git clone git@github.com:jmcdo29/forward-ref-request-scoped-bug.git
2) cd forward-ref-request-scoped-bug
3) npm i / pnpm i / yarn add
4) npm run start:dev / pnpm start:dev / yarn start:dev
5) curl http://localhost:3000