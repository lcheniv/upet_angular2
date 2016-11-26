import {Component} from 'angular2/core';
import {Config} from './config.service';
import {LoginComponent} from './login.component';
import {Keywords} from './keywords';

@Component({
    selector: 'search',                            // Basically creating our own tag
    templateUrl: 'app/ts/view/search.component.html'      // Data-binding - to include something from our class in our template which is done by double squigglys {{}}
})


export class SearchComponent {

    searchHeading = Config.SEARCH_HEADING;

    keywords: Array<Keywords>;

    }