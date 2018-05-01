import { Injectable } from "@angular/core";
import { 
    HttpClient, 
    HttpRequest, 
    HttpResponse, 
    HttpEventType 
} from "@angular/common/http";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable() 
export class UploadService {
    uploadURL = "http://localhost:3000/upload";

    constructor(private _httpClient: HttpClient) {}

    public uploadFile(files: Set<File>): { [ key:string ]: Observable<number> } {
        const status = {};
        
        files.forEach((file) => {
            // create a new formData for each of the file
            const formData: FormData = new FormData();

            formData.append("file", file, file.name);

            const req = new HttpRequest("POST", this.uploadURL, formData, { 
                reportProgress: true
            });

            const progress = new BehaviorSubject<number>(0);

            this._httpClient.request(req).subscribe((event) => {
                if(event.type === HttpEventType.UploadProgress) {
                    const percentDone = Math.round(100 * (event.loaded / event.total));
                    progress.next(percentDone);
                }
                else if(event instanceof HttpResponse) {
                    progress.complete();
                }
            });

            status[file.name] = {
                progress: progress.asObservable()
            };
        });

        return status;
    }
}