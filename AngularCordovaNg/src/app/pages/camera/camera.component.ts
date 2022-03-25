import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  cameraImage: string = "";
  galleryImage: string = "";

  cameraOpen: boolean = false;
  galleryOpen: boolean = false;

  constructor(private cdRef: ChangeDetectorRef){

  }


  set image(img: string) {
    this.galleryImage = img;

  }


  ngOnInit(): void {


  }


  openCamera(): void {
    if (this.cameraOpen) {
      return;
    }
    console.log(this);
    this.cameraOpen = true;
    let options: CameraOptions = {
      quality: 100,
      sourceType: Camera.PictureSourceType.CAMERA,
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
      saveToPhotoAlbum: false
    };
    let me = this;
    navigator.camera.getPicture(
      function (imageData) {
        console.log(me);
        console.log(imageData);
        me.cameraImage = "data:image/jpeg;base64," + imageData;
        me.cameraOpen = false;
        me.cdRef.detectChanges();
      },
      function () {
        console.log(arguments);
        me.cameraOpen = false;
      }, options);
  }


  browseGallery(): void {
    if (this.galleryOpen) {
      return;
    }
    this.galleryOpen = true;
    let me = this;
    let options: CameraOptions = {
      quality: 100,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE
    };
    console.log(me);
    console.log(me.galleryOpen);
    navigator.camera.getPicture(
      function (imageData) {
        console.log(me);
        console.log(imageData);
        me.image = "data:image/jpeg;base64," + imageData;
        me.galleryOpen = false;
        me.cdRef.detectChanges();
      },
      function () {
        console.log(arguments);
        me.galleryOpen = false;
      }, options);
    //this.galleryOpen = true;
  }


}
