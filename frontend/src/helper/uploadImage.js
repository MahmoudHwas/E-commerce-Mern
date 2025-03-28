export const uploadImage = async(image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Second-Time");
    const cloudName= process.env.REACT_APP_CLOUD_NAME_CLOUDINARY;
    const url = `http://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error("something went wrong");
    }
  
    const data = await response.json();
    return data
  }
  