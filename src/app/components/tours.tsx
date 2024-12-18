import Link from "next/link";
import { Container } from "./container";
import Image from "next/image";
import { destinationItems } from "../data";
import { Rating } from "./rating";

export function Tours() {
    return (
        <Container className="py-20">
            <h2 className="text-4xl font-heading font-semibold text-center text-gray-800">
                Most Demanded Destinations
            </h2>
            <p className="text-center max-w-4xl mx-auto text-slate-600 mt-4">
                Explore our top destinations voted by more than 100,000+ customers around the world.
            </p>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                {destinationItems.map((destination) => (
                    <Link href={destination.id} key={destination.id}>
                        <div className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                            {/* Image Section */}
                            <div className="w-full h-64 overflow-hidden">
                                <Image
                                    src={destination.Image}
                                    alt={destination.title}
                                    width={420}
                                    height={400}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            {/* Text Section */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:from-purple-500 to-pink-500  transition-all duration-300">
                                    {destination.title}
                                </h3>
                                <Rating rate={destination.rating} />
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-lg font-medium text-purple-500">${destination.price}</p>
                                    <p className="text-sm text-pink-500">{destination.period}</p>
                                </div>
                            </div>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-indigo-500 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </Link>
                ))}
            </ul>
        </Container>
    );
}
