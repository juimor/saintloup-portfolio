import { ref, getDownloadURL } from "firebase/storage";
import { Injectable } from '@angular/core';
import { storageRef } from "./firebase.service";
import { firebaseFolders } from "../constants/Constants";

@Injectable({
  providedIn: 'root'
})


export class ImagesService {
  itemsUrls: string[] = [];
  loading: boolean = false;
   
  constructor() { }

  async listAllImages(folder:string) {
    this.loading = true;
    this.itemsUrls = [];
    let folderToFetch = firebaseFolders[0][folder]
    for (let i = 1; i < folderToFetch.numberToFetch; i++) {
      await getDownloadURL(ref(storageRef, '365/'+ folderToFetch.folderName + '/' + i +'.jpg'))
      .then((url) => {
        this.itemsUrls.push(url);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
      
    }
    this.loading = false;
  }
}
