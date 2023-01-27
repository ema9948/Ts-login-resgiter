"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const userRoute = (0, express_1.Router)();
userRoute.post("/login", userController_1.login);
userRoute.post("/register", userController_1.register);
exports.default = userRoute;
