/** @format */

export let isAuthenticated = false;
export function authenticate() {
	isAuthenticated = true;
}
export const phoneInput =
	"border outline-none focus:outline-none focus-visible:outline-none focus:ring " +
	"focus-visible:ring-1 focus-visible:ring-black focus:border-none focus-visible:border-none px-3 py-2 rounded-md";

// export const BASE_URL = "https://elibrary-backend-production.up.railway.app/api/";
export const BASE_URL = "http://localhost:8000/api/"