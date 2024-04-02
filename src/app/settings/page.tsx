/* eslint-disable @next/next/no-img-element */
"use client";

import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

export type Setting = {
  category: string;
  value: string | number | boolean;
};

const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
];

const data: Setting[] = [
  {
    category: "Account",
    value: true,
  },
  {
    category: "Notifications",
    value: false,
  },
  {
    category: "Language",
    value: "English",
  },
  {
    category: "Theme",
    value: "Dark",
  },
];

type Props = {};

export default function SettingsPage({}: Props) {
  return (
    <div className="flex flex-col gap-5">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
