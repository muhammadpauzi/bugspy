import { writable } from "svelte/store";

const modalCreateStore = writable(false);
const modalEditStore = writable(false);

export { modalCreateStore, modalEditStore };