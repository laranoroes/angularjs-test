import { Component, OnInit } from '@angular/core';
import { CameriteService, Cameras } from '../camerite.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})

export class CamerasComponent implements OnInit {

  cameras: Cameras[] = [];
  constructor(public cameriteService: CameriteService) { }

  ngOnInit(): void {
    this.cameriteService.getCameras().subscribe(res => {
      this.cameras = res;
    })
  }

}
