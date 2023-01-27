"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./router/user"));
require("dotenv/config");
require("./db/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/user/", user_1.default);
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
