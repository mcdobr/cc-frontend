import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private oAuthService: OAuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Guard has been activated');
    return this.oAuthService.hasValidAccessToken();
  }
}
