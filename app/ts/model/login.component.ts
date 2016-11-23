import {Component} from 'angular2/core';
import {Config} from './config.service';

@Component({
    selector: 'login',                            // Basically creating our own tag
    templateUrl: 'app/ts/view/login.component.html',      // Data-binding - to include something from our class in our template which is done by double squigglys {{}}
})


export class AppComponent {
    
    // Can create variables inside this class
    loginHeading = Config.LOGIN_HEADING; // Called from config class which contains a static string variable written in TypeScript


}
