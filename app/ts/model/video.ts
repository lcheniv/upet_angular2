export class Video {
    id: number;
    title: string;
    videoCode: string;
    description: string;

    // Video constructor - consist of a ID, title, videocode to obtain the video from YouTube, and a description
    constructor(id: number, title: string, videoCode:string, description:string){

        this.id = id; //Setting up class variables
        this.title = title;
        this.videoCode = videoCode;
        this.description = description;

    }   
}

