import React from "react";
import { ListTodo, Plus, Check } from "lucide-react";
import InputTask from "./inputTask";
import { createClient } from "@/utils/supabase/server";
const Task = async () => {
  const supabase = await createClient();
  const { data: tasks, error } = await supabase
    .from("task")
    .select("*")
    .order("start_time", { ascending: true });

  if (error) {
    console.error("Failed to fetch tasks:", error);
  }
  return (
    <div className="xl:col-span-3 flex flex-col p-5 w-full gap-4 bg-white rounded-2xl shadow-md">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <ListTodo className="w-6 h-6" />
          <span className="text-lg font-semibold">Task</span>
        </div>
        <div>
          <InputTask />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {(!tasks || tasks.length === 0) && (
          <div className="text-center text-sm text-gray-500 py-4 font-medium">
            No tasks yet. Click the + button to add one!
          </div>
        )}

        {tasks?.map((task) => (
          <div
            key={task.id}
            className="flex flex-col px-3 py-2 bg-[#f8f9FA] rounded-xl"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="capitalize font-semibold text-md">
                  {task.title}
                </h3>

                <button className="bg-[#269957] text-white rounded-full p-2">
                  <Check className="w-3 h-3" />
                </button>
              </div>

              <div className="text-sm font-medium">{task.description}</div>

              <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                {task.start_time} - {task.end_time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
