import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';

@Injectable()
export class ContextInfoEffects {

  constructor(protected actions$: Actions) {
  }

  /*@Effect()
  loadUser$ = this.actions$.pipe(
    ofType(contextInfoActions.LOAD_USER),
    switchMap(action => {
      return this.authenticationService.login(name, password)
        .pipe(
          map(user => new userActions.LoadUserSuccess(user)),
          catchError(error => of(new LoadUserFail(error)))
        );
    })
  );*/
}
