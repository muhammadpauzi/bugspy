import { writable } from "svelte/store";

const modalCreateStore = writable(false);

export { modalCreateStore };