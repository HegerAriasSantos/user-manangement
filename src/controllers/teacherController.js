import { query } from "express";
import Model from "../models/teacherModel.js";

export function getAll() {
  return new Promise(async (resolve, reject) => {
    const teachers = await Model.getAll();
    if (teachers.length > 0) {
      resolve(teachers);
    } else {
      reject("not teacher found");
    }
  });
}

export function getOne(req) {
  return new Promise(async (resolve, reject) => {
    const { params } = req;
    console.log(params);
    if (!params.id) return reject("id is required");

    const teacherFound = await Model.getOne(params.id);
    console.log(!teacherFound);
    if (teacherFound.length <= 0) return reject("teacher not found");

    const teacher = { ...teacherFound[0] };

    resolve(teacher);
  });
}

export function create(body) {
  return new Promise(async (resolve, reject) => {
    if (!body.name) {
      return reject("Name is required");
    }

    const teacher = {
      name: body.name,
      active: 1,
      create: Date.now(),
      deleted: "aun Activo",
    };

    const teacherCreate = await Model.create(teacher);

    if (teacher) {
      resolve(teacher);
    } else {
      reject("Error creating student");
    }
  });
}
export function update(req) {
  return new Promise(async (resolve, reject) => {
    const { body, query } = req;

    if (!body.name && !body.active) return reject("data is required");
    if (!query.id) return reject("id is required");

    const teacherFound = await Model.getOne(query.id);

    if (!teacherFound) return reject("Teacher not found");

    const teacher = { ...teacherFound[0] };

    if (body.name) teacher.name = body.name;
    if (body.active) teacher.active = body.active;

    const teacherUpdated = await Model.update(teacher, query.id);
    if (teacherUpdated) {
      resolve(teacher);
    } else {
      reject("Error updating teacher");
    }
  });
}

export function Delete(req) {
  return new Promise(async (resolve, reject) => {
    const { params } = req;
	console.log(params.id);
    if (!params) {
      return reject("id is required");
    }
    const teacherFound = await Model.getOne(params.id);
	console.log(teacherFound);
    if (!teacherFound) return reject("teacher not found");

    const teacher = { ...teacherFound[0] };

    teacher.date_deleted = Date.now();
    teacher.active = 0;

	console.log(teacher);
    const teacherDelete = Model.Delete(teacher);

    if (teacherDelete) {
      resolve(teacherFound);
    } else {
      reject("Error deleting teacher");
    }
  });
}
