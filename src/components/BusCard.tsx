
import { Bus, Clock } from "lucide-react";
import OccupancyIndicator from "./OccupancyIndicator";

type OccupancyLevel = 'empty' | 'low' | 'medium' | 'high' | 'full';

interface BusCardProps {
  lineNumber: string;
  destination: string;
  estimatedArrival: string;
  occupancy: OccupancyLevel;
  className?: string;
}

const BusCard = ({
  lineNumber,
  destination,
  estimatedArrival,
  occupancy,
  className = "",
}: BusCardProps) => {
  return (
    <div className={`glass-card rounded-xl p-4 mb-4 transition-all hover:shadow-lg ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
            <Bus className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">{lineNumber}</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                {destination}
              </span>
            </h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Clock className="h-4 w-4 mr-1" />
              {estimatedArrival}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <OccupancyIndicator level={occupancy} />
      </div>
    </div>
  );
};

export default BusCard;
