import environments from "../environments/environments.json";

interface UserRequest {
  email: string;
  password: string;
}

// TODO: Integrate function to fetch auth data
export const signin = async (userPayload: UserRequest): Promise<any> => {
  const peticion = await fetch(`${environments.urlBackend}/signin`, {
    method: "POST",
    body: JSON.stringify(userPayload),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await peticion.json();
  return data;
};

export {};
