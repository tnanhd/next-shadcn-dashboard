import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";
import Card from "./Card";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
};

export default function SmallCard(props: CardProps) {
  return (
    <Card>
      <section className="flex justify-between gap-2">
        <p>{props.label}</p>
        <props.icon className="h-4 w-4 text-gray-400" />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <p className="text-xs text-gray-500">{props.description}</p>
      </section>
    </Card>
  );
}
