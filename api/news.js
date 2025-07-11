export default async function handler(req, res) {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b4d0766e50fd411b92be88c7594bffcb"
  );

  const data = await response.json();
  res.status(200).json(data);
}
