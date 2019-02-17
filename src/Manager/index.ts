import * as express from 'express';
import * as multer from 'multer';
import * as index from './methods/index.js';
import * as path from 'path';

import Router from "./Router";
import Validator from "./Validator";
import Dispatcher from "./Dispatcher"


class Manager{
    modelMap: any;
    databaseMap: any;
    fileSystemsMap: any;
    project: any;
    app: any;
    multer: any;
    Router: any;
    Dispatcher: any;
    validator: any
    path: any;
    express: any;

    constructor(project: any){
        this.modelMap = new Map();
        this.databaseMap = new Map();
        this.fileSystemsMap = new Map();
        this.project = project;
        this.app = express();
        this.express = express
        this.path = path;
        this.multer = multer;
        this.Router = Router;
        this.Dispatcher = Dispatcher
        this.validator = Validator;
    }

    initialize = index.initialize;
    manage = index.manage;
    createModelMap = index.createModelMap;
    createDatabaseMap = index.createDatabaseMap
    setupORM = index.setupORM;
    determineORM = index.determineORM;
    createFileSystemsMap = index.createFileSystemsMap;
    determineFS = index.determineFS;
    setupFS = index.setupFS
    createTables = index.createTables
}

export default Manager
