import { StarIcon } from "lucide-react";

interface RatingProps {
    rate: number;
}

export function Rating({ rate }: RatingProps) {
    return (
        <div className="flex items-center space-x-1">
            {Array(5)
                .fill(0)
                .map((_, index) => (
                    <StarIcon
                        key={index}
                        className={`w-5 h-5 ${
                            index < rate
                                ? "fill-yellow-400 stroke-yellow-500 text-yellow-400" // Filled stars
                                : "stroke-slate-500" // Empty stars
                        }`}
                    />
                ))}
        </div>
    );
}
