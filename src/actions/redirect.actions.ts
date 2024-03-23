"use server";

import { redirect } from "next/navigation";

export const navigateHome = () => {
  redirect("/user");
};

export const navigateNotfound = () => {
  redirect("/not-found");
};

export const navigateEdit = (userId: string) => {
  redirect(`/${userId}/edit`);
};

export const navigateDelete = (userId: string) => {
  redirect(`/${userId}/delete`);
};