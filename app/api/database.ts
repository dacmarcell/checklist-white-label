import path from "path";
import { Database, OPEN_CREATE, OPEN_READWRITE } from "sqlite3";

const dbPath = path.join(process.cwd(), "profile.db");

export const db = new Database(dbPath, OPEN_READWRITE | OPEN_CREATE, (err) => {
  if (err) {
    console.error(err.message);
  }

  console.info("Connected to the database.");
});

export const apiGet = async (query: string) => {
  return await new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    db.all(query, (err: Error, row: any) => {
      if (err) {
        console.error(err.message);
        return reject(err);
      }
      return resolve(row);
    });
  });
};

export const apiPost = async (query: string, values: string[]) => {
  return await new Promise((resolve, reject) => {
    db.run(query, values, function (err) {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(null);
    });
  });
};
