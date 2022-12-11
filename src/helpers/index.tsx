export const sendMessageToTelegram = ({
  nick,
  comment,
}: {
  nick: string;
  comment: string;
}): Promise<unknown> => {
  const TOKEN = "5973224953:AAEPCsnE94cLWrrHOiJNjPtq6838f7itKKs";
  const chat_id = "-1001517226903";
  const api = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const parse_mode = "html";
  const text = `<strong>Message from</strong>  <pre>${nick}: </pre> <strong>${comment}</strong>`;

  return fetch(api, {
    method: "POST",
    body: JSON.stringify({ chat_id, text, parse_mode }),
    headers: { "Content-Type": "application/json" },
  });
};
