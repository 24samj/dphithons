import { stats } from "../constants/mappingData";
import { Stat } from "../types/types";

interface StatCardProps {
  item: Stat;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ item, index }) => {
  return (
    <div
      key={item.head}
      className={`relative flex flex-1 items-center justify-center gap-6 p-4 ${
        index < 2
          ? "md:before:absolute md:before:right-0 md:before:h-1/2 md:before:w-px md:before:bg-gray-300 md:before:content-['']"
          : ""
      }`}
    >
      <img src={item.icon} alt={item.head} className="h-auto w-14" />
      <div>
        <h3 className="text-negative text-2xl font-semibold">{item.head}</h3>
        <p className="text-md text-negative">{item.info}</p>
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="flex flex-col flex-wrap items-start bg-secondary px-6 py-16 md:flex-row md:items-center lg:px-24">
      {stats.map((item, index) => (
        <StatCard item={item} key={item.head} index={index} />
      ))}
    </div>
  );
};

export default StatsSection;
