import Error from "next/error";
import { apiGet, apiPost } from "../database";

export async function GET() {
  const query = "SELECT * from tasks";

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
      { message: "Oops! Algo deu errado ao obter tarefas", error: error },
      {
        status: 400,
      }
    );
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, description, status } = body;

  const query = "INSERT INTO tasks(name, description, status) VALUES(?, ?, ?)";
  const values = [name, description, status];

  let statusCode, respBody;
  await apiPost(query, values)
    .then(() => {
      statusCode = 200;
      respBody = { message: "Tarefa criada com sucesso" };
    })
    .catch((err: Error | string) => {
      statusCode = 400;
      respBody = {
        message: "Oops! Algo deu errado ao criar tarefa",
        error: err,
      };
    });
  return Response.json(respBody, { status: statusCode });
}
