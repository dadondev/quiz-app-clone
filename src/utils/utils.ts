/** @format */

import {config} from "dotenv";

config()

export const BASE_URL = process.env.BASE_URL ||""
export const secret = process.env.JWT_SECRET ||""