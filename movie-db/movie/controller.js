import { getAll } from './model';

export async function listAction(request, response) {
  const data = await getAll();
  response.send(data);
}
