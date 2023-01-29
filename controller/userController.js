"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield userModel_1.default.findOne({ email });
    if (!user)
        return res.status(404).json({ msg: "email no registrado" });
    if (user.password != password)
        return res.sendStatus(401);
    return res.sendStatus(200);
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    if (!email || !name || !password)
        return res.status(404).json({ msg: "faltan datos." });
    let newUser = yield userModel_1.default.findOne({ email });
    if (newUser)
        return res.status(401).json({ msg: "Email en uso." });
    newUser = new userModel_1.default({ name, password, email });
    yield newUser.save();
    return res.sendStatus(201);
});
exports.register = register;
