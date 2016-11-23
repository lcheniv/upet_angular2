import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {LoginComponent} from './login.component';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',                            // Basically creating our own tag
    templateUrl: 'app/ts/view/app.component.html',      // Data-binding - to include something from our class in our template which is done by double squigglys {{}}
    directives: [PlaylistComponent]                // Set up directives - telling Angular we are making custom html
})


export class AppComponent {
    
    // Can create variables inside this class
    mainHeading = Config.MAIN_HEADING; // Called from config class which contains a static string variable written in TypeScript

    // Array of videos
    videos: Array<Video>;

    // Need to send these videos to html page through the playlist component which is done through attribute binding 
    constructor(){
        this.videos = [
            new Video(1, "Django", "f8qBeaGe2S4", "This video is really really cool"),
            new Video(2, "Baby Got Back", "f8qBeaGe2S4", "The story of a baby who could"),
            new Video(3, "Macho Macho Man", "f8qBeaGe2S4", "Testing")
        ]
    }
}
