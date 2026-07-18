"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
export async function addTask(formData: FormData) {
  const supabase = await createClient();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const start_time = formData.get("start_time") as string;
  const end_time = formData.get("end_time") as string;
  const { error } = await supabase
    .from("task")
    .insert([{ title, description, start_time, end_time }]);

  if (error) {
    console.error("Error inserting task:", error);
    throw new Error("Failed to add task");
  }

  revalidatePath("/farmer-portal");
}
