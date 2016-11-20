import {Component} from 'angular2/core';

@Component({

    selector: 'playlist',                               // <playlist> tag
    templateUrl: 'app/ts/playlist.component.html', // HTML file that represents HTML we want to use for the template
    inputs: ['videos']                                  // We have incoming data that needs to be handled by specifiyng its inputs - info coming in
                                                        // Accept data from app component
    
})

export class PlaylistComponent {

}