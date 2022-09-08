import Model from "../models/sessionModel";

export function getAll() {
  return new Promise(async (resolve, reject) => {
    const sessions = await Model.getAll();
    if (sessions.length > 0) {
      resolve(sessions);
    } else {
      reject("Sessions not found");
    }
  });
}

export function create(body) {
  return new Promise(async (resolve, reject) => {
    if (!body.hour_start) {
      return reject("Hour Start is required");
    }
    if (!body.hour_end) {
      return reject("Hour End is required");
    }

    const session = {
      hour_start: body.hour_start,
      hour_end: body.hour_end,
    };
    const sessionCreated = await Model.create(session);
    if (session) {
      resolve(session);
    } else {
      reject(" Error while creating a Session");
    }
  });
}

export function update(req) {
  return new Promise(async (resolve, reject) => {
    const { body, query, params } = req;
    if (!body.hour_start && !body.hour_end) {
      return reject("Data is required");
    }
    if (!params.id && !body.id) {
      return reject("id is required");
    }

    const sessionFound = await Model.getOne(params.id);

    if (!sessionFound) return reject({ message: "Session not Found" });

    const session = { ...sessionFound[0] };
    if (body.hour_start) {
      session.hour_start = body.hour_start;
    }
    if (body.hour_end) {
      session.hour_end = body.hour_end;
    }

    const sessionUpdated = await Model.update(session, params.id);
    if (sessionUpdated) {
      resolve(session);
    } else {
      reject("Error updating session");
    }
  });
}

export function Delete(req) {
  return new Promise(async (resolve, reject) => {
    const { params } = req;
    if (!params.id) return reject("id is required");

    const sessionFound = await Model.getOne(params.id);

    if (!sessionFound) return reject("Session not found");

    const sessionDeleted = await Model.Delete(params.id);

    if (sessionDeleted) {
      resolve(sessionFound);
    } else {
      reject("Error deleting student");
    }
  });
}
