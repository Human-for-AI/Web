import { getRequest } from "../axios";


export const postUploadImage = async (file:FormData|null|undefined) => {
  try {
    const request = getRequest();
    const response =  await request.post("/upload", file);
    return response;

  } catch (error) {
    throw error;
  }
};
