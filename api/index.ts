// import fetch from 'node-fetch';

export default async function (request: any, response: any) {
  const res = await fetch(
    "https://backend-practice.codebootcamp.co.kr/graphql"
  );
  const data = await res.json();
  console.log("data");
  return response.status(200).json({ data });
}
