import { query, response } from "express";
import db from "../db";

function getAll() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM teacher WHERE active = 1", (err, result) => {
      console.log(result, err);
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
}
function create({name,active,create,deleted}){
  return new Promise((resolve,reject)=>{
    db.query(
      "INSERT INTO teacher (name,active,date_created,date_deleted ) VALUES (?,?,?,?)",
    [name, active,create,deleted],(err,result)=>{
      if(err){
        reject(err)
      }else{
        resolve(result)
      }
    })
  })
}

function getOne(id){
  return new Promise((resolve,reject)=>{
    db.query(
      "SELECT * FROM teacher WHERE id = ?",[id],(err,result)=>{
        if(err){
          reject(err)
        }else{
          resolve(result)
        }
      }
    )
  })
}

function update({name,active},id){
  return new Promise((resolve,reject)=>{
    db.query(
      "UPDATE teacher SET name = ?, active = ? WHERE id = ?",
      [name, active,id],(err,result)=>{
        if(err){
          reject(err)
        }else{
          resolve(result)
        }
      }
    )
  })
}

function Delete({active,date_deleted,id}){
  return new Promise((resolve, reject)=>{
    db.query(
      "UPDATE teacher SET active = ?, date_deleted = ? WHERE id = ?",[active,date_deleted,id],(err,result)=>{
        if(err){
          reject(err)
        }else{
          resolve(result)
        }
      }
    )
  })
}

export default {
  getAll,
  create,
  update,
  getOne,
  Delete
};
