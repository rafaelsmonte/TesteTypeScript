"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var app_1 = __importDefault(require("../src/app"));
require('dotenv').config();
var port = normalizePort(process.env.PORT || '3000');
var server = http_1.default.createServer(app_1.default);
server.listen(port);
console.log('teste on ' + port);
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port))
        return val;
    if (port > 0)
        return port;
    return false;
}
