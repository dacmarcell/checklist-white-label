import { apiGet } from "../../database";

export async function GET() {
  const query = "SELECT * from tasks WHERE status = 'finalizada'";

  let status, body;
  try {
    await apiGet(query)
      .then((res) => {
        status = 200;
        body = { message: res };
      })
      .catch((err: Error) => {
        status = 400;
        body = {
          messsage: "Oops! Algo deu errado ao obter tarefas",
          error: err,
        };
      });
    return Response.json(body, {
      status,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error.message);
    return Response.json(
      { message: "Oops! Algo deu errado ao obter tarefas", error },
      {
        status: 400,
      }
    );
  }
}
