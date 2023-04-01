import axios from "axios";

class UploadService {
    async uploadImage(event: any): Promise<any> {
        const image = event.target.files[0];
        const type = image.type.substring(6)
        console.log(type)
        if(type !== "jpg" && type !== "jpeg" && type !== "png") {
          return 400;
        }
        const formData = new FormData();
        formData.append("image", image);
        const header = {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Origin": "*",
          },
        };
        const url = `http://localhost:4000/upload/add`;
      
        try {
          const response = await axios.post(url, formData, header);
          console.log(response.data);
          window.localStorage.setItem("originalSrc", "https://master-cut.s3.us-east-1.amazonaws.com/" + response.data.originial)
          window.localStorage.setItem("removedSrc", "https://master-cut.s3.us-east-1.amazonaws.com/" + response.data.removed)
          return response.data;
        } catch (e) {
          console.error(e);
          return e;
        }
      }
      
    
}

export const uploadService = new UploadService();


