import environments from "../environments/environments.json";

export const getUsers = async (offset?: 0, limit?: 0): Promise<any> => {
  const peticion = await fetch(
    `${environments.urlBackend}/users?${offset}=0&${limit}=0`
  );

  const data = await peticion.json();

  return data;
};
