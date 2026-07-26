import React from "react";
import LahanClient from "@/components/farmer-portal/lahan/clientLahan";
import Task from "@/components/farmer-portal/homeDash/task";
const Lahan = () => {
  return <LahanClient taskComponent={<Task />} />;
};

export default Lahan;
