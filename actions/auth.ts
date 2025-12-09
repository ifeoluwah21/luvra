"use server";

export async function onSubmit(formData: FormData) {
  console.log(formData.get("email"), formData.get("password"), "Hello world!!");
}
