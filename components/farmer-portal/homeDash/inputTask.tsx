"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import {
  DialogClose,
  DialogDescription,
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Field, FieldGroup } from "../../ui/field";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { addTask } from "@/app/action";
const InputTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleFormAction = async (formData: FormData) => {
    await addTask(formData);
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="p-2 bg-[#269957] rounded-2xl text-white hover:bg-[#1e7a45] transition-colors cursor-pointer outline-none">
        <Plus className="w-5 h-5" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form action={handleFormAction}>
          <DialogHeader>
            <DialogTitle>Schedule Task</DialogTitle>
            <DialogDescription>
              Add new task for your land. Click save when you&apos;re done
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="Title">Name</Label>
              <Input id="Title" name="title" defaultValue="Name of your task" />
            </Field>
            <Field>
              <Label htmlFor="desc">Description</Label>
              <Input
                id="desc"
                name="description"
                defaultValue="notes for your task"
              />
            </Field>
            <Field className="flex gap-4">
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="start_time">Start Time</Label>
                <Input
                  id="start_time"
                  name="start_time"
                  type="time"
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="end_time">End Time</Label>
                <Input
                  id="end_time"
                  name="end_time"
                  type="time"
                  required
                  className="rounded-xl"
                />
              </div>
            </Field>

            <DialogFooter className="mt-4">
              <button
                type="submit"
                className="w-full bg-[#269957] text-white p-2.5 rounded-xl font-semibold hover:bg-[#1e7a45] transition-colors"
              >
                Save Task
              </button>
            </DialogFooter>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InputTask;
