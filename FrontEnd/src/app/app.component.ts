import {Component, OnInit} from '@angular/core';
import {Track} from 'ngx-audio-player';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  implements OnInit {
  title = 'Music-Dock';

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [5, 50];

  msaapPlaylist: Track[] = [
    {
      title: 'Sound Helix',
      link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    }
  ];

  constructor(private appService: AppService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.appService.getMusicFiles().subscribe(message => {
      const mf = 'mf';
      console.log(message[mf]);
      message[mf].forEach(track => {

        this.msaapPlaylist.push(track);

      });

    });
    console.log('Init');
  }

  // tslint:disable-next-line:typedef
  onEnded(event){
    console.log(event);
  }


}


