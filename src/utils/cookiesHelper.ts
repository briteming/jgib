"use server";
import { cookies } from "next/headers";

export const getCookie = async (name: string) => {
  const cookiesStore = cookies();
  return cookiesStore.get(name)?.value;
};

export const setCookie = async (name: string, value: string) => {
  const cookiesStore = cookies();
  return cookiesStore.set(name, value);
};

export const deleteCookie = async (name: string) => {
  const cookiesStore = cookies();
  return cookiesStore.delete(name);
};
