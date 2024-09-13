/** @format */

import {config} from "dotenv";

config()

export const BASE_URL = process.env.BASE_URL ||"http://localhost:3000";
export const secret = process.env.JWT_SECRET ||""