import httpClient from "../http.client"

export const printOrder = async (order) => {
  const response = await httpClient.instance.post('/print', { hello: "world" });
  console.log({ response });
  return response;
}
