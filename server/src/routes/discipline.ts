import { Router } from "express";
import { createDiscip, createManyDiscip, delDiscip, getAllDisciplines, getDiscipByName, getDiscipline, getProfDiscip, updDiscip } from "../controllers/discipline";
import { isAuthenticated, isProfessor } from "../middleware/userStatus";


export default (router: Router)=>{
    router.post('/discipline/create',isAuthenticated,isProfessor, createDiscip),
    router.post('/discipline/create-many',isAuthenticated,isProfessor, createManyDiscip),
    router.get('/discipline/:id',isAuthenticated, getDiscipline),
    router.get('/discipline/:name',isAuthenticated, getDiscipByName),
    router.get('/disciplines', isAuthenticated, getAllDisciplines),
    router.get('/disciplines/professor/:professorId',isAuthenticated, getProfDiscip),
    router.patch('/discipline/upd/:id',isAuthenticated,isProfessor, updDiscip),
    router.delete('/discipline/del/:id',isAuthenticated,isProfessor, delDiscip)
};