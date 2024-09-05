import clsx from "clsx";
import { benefits } from "../constants/mappingData";
import { Benefit } from "../types/types";

interface BenefitCardProps {
  item: Benefit;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ item, index }) => {
  const isSecondRow = index % 2 === 1;

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-backhround-hinted px-4 py-10">
      <img
        src={item.icon}
        alt={item.title}
        className={clsx("h-12 w-12", {
          "self-end md:self-start": isSecondRow,
        })}
      />
      <h3
        className={clsx("text-2xl font-semibold text-text", {
          "text-right md:text-left": isSecondRow,
        })}
      >
        {item.title}
      </h3>
      <p className="text-md text-extra text-justify md:text-left">
        {item.info}
      </p>
    </div>
  );
};

const BenefitsSection: React.FC = () => (
  <section className="px-6 py-22 md:px-12 lg:px-48">
    <h2 className="text-center text-4xl font-medium tracking-tight">
      Why Participate in <span className="text-accent">AI Challenges?</span>
    </h2>
    <div className="mt-24 grid gap-x-16 md:grid-cols-2 lg:gap-y-24">
      {benefits.map((item, index) => (
        <BenefitCard key={item.title} item={item} index={index} />
      ))}
    </div>
  </section>
);

export default BenefitsSection;
