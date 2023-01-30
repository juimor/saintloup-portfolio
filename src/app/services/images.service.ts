import { ref, getDownloadURL } from "firebase/storage";
import { Injectable } from '@angular/core';
import { storageRef } from "./firebase.service";
import { firebaseFolders } from "../constants/Constants";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class ImagesService {
  loading: boolean = false;
  private itemsUrls: string[];
  itemsUrls$ = new Subject<any>();
   
  constructor() { }

  async listAllImages(folder:string) {
    this.loading = true;
    this.itemsUrls = [];
    let folderToFetch = firebaseFolders[0][folder]
    for (let i = 1; i < folderToFetch.numberToFetch; i++) {
      await getDownloadURL(ref(storageRef, '365/'+ folderToFetch.folderName + '/' + i +'.jpg'))
      .then((url) => {
        this.itemsUrls.push(url);
        this.itemsUrls$.next(this.itemsUrls);
      })
      .catch((error) => {
        console.error(error);
      });
    }
    this.loading = false;
  }
}
