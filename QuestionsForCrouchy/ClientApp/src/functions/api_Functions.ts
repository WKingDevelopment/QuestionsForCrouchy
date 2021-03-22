import { isEmptyOrSpace } from "./validation_Functions";

const apiUrl: string = 'https://localhost:44344'

const methods = {
  post: 'POST',
  put: 'PUT',
  get: 'GET',
  delete: 'DELETE'
}

const postRequest = async (data: any, model: string) => {
  try {
    const response = await fetch(`${apiUrl}/api/${model}`, {
      method: methods.post,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ ...data })
    });
    return response.json();
  } catch (error) {
    console.log(error)
  }
};

const getRequest = async (model: string, id: string = '') => {
  try {
    const url: string = isEmptyOrSpace(id) ? `${apiUrl}/api/${model}` : `${apiUrl}/api/${model}/${id}`
    const response = await fetch(url, {
      method: methods.get,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://localhost:44344/"
      }
    });
    return response.json();
  } catch (error) {
    console.log(error)
  }
};

const deleteRequest = async (model: string, id: string) => {
  try {
    const url: string = `${apiUrl}/api/${model}/${id}`
    const response = await fetch(url, {
      method: methods.delete,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://localhost:44344/"
      }
    });
    return response.json();
  } catch (error) {
    console.log(error)
  }
};
export { postRequest, deleteRequest, getRequest }
