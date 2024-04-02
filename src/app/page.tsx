import SmallCard, { CardProps } from "@/components/SmallCard";
import PageTitle from "@/components/PageTitle";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Card from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    description: "+180.1% from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+19% from last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+201 since last hour",
    icon: Activity,
  },
];

const userSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <PageTitle title="Dashboard" />
      <section
        className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 
        gap-4 gap-x-8 transition-all"
      >
        {cardData.map((data, index) => (
          <SmallCard
            key={index}
            label={data.label}
            icon={data.icon}
            amount={data.amount}
            description={data.description}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <Card>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart></BarChart>
        </Card>
        <Card className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month
            </p>
          </section>
          {userSalesData.map((data, index) => (
            <SalesCard
              key={index}
              name={data.name}
              email={data.email}
              saleAmount={data.saleAmount}
            />
          ))}
        </Card>
      </section>
    </div>
  );
}
