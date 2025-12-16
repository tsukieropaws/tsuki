export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { message } = req.body;

  // RESPUESTA TEMPORAL (luego aquí va la IA)
  res.status(200).json({
    reply: `Tsuki te ha escuchado decir: "${message}"`
  });
}
