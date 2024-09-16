"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const students_router_1 = __importDefault(require("./routers/students-router"));
const groups_router_1 = __importDefault(require("./routers/groups-router"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use("/students", students_router_1.default);
app.use("/groups", groups_router_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
