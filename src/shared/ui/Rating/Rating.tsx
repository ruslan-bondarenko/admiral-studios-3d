import clsx from "clsx";
import React, { FC } from "react";

import { StarEmptyIcon, StarIcon } from "@/shared/assets";

type Props = {
  className?: string;
  rating?: number;
  hasPrefix?: boolean;
};

const Rating: FC<Props> = ({ rating = 5, className = "", hasPrefix }) => (
  <div className={clsx("flex gap-2 items-center text-xs", className)}>
    {hasPrefix && <span>{rating.toFixed(1)}</span>}
    <div className="flex md:gap-0.5">
      {[...Array(5).keys()].map((value) =>
        value < Math.trunc(rating) ? (
          <StarIcon
            key={`star-${value}`}
            classNames="w-4 h-4 md:w-5 md:h-5 text-tone-700"
          />
        ) : (
          <StarEmptyIcon
            key={`star-${value}`}
            classNames="w-4 h-4 md:w-5 md:h-5"
          />
        )
      )}
    </div>
  </div>
);

export default Rating;
