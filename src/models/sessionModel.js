import db from "../db";

const getAll = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * from session", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const create = ({
  //   day,
  //   teacher_id,
  //   subject,
  //   class_room_id,
  hour_start,
  hour_end,
}) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO session (hour_start, hour_end) VALUES (?,?)",
      [hour_start, hour_end],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const getOne = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM session WHERE id = ?", [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const update = ({ hour_start, hour_end }, id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE session SET hour_start = ?, hour_end = ? WHERE id = ?",
      [hour_start, hour_end, id],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const Delete = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM session WHERE id = ?", [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const filter = (table, obj = {}) => {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM ${table}`;
    const keys = Object.entries(obj);

    if (keys.length >= 1) {
      query = `SELECT * FROM ${table} WHERE ${keys[0][0]} = ${keys[0][1]}`;
      for (let index = 1; index < keys.length; index++) {
        const key = keys[index][0];
        const value = keys[index][1];
        query += ` AND ${key} = ${value}`;
        console.log(query);
      }
    }

    db.query(query, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export default {
  getAll,
  create,
  getOne,
  update,
  Delete,
  filter,
};
