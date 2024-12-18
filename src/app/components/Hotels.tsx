import Link from "next/link";
import { hotels } from "../data";
import { Container } from "./container";
import Image from "next/image";
import { Rating } from "./rating";
import { BedDoubleIcon, User2 } from "lucide-react";

export function Hotels() {
    return (
        <Container className="py-20">
            <h2 className="text-4xl mt-8 font-heading font-semibold text-center text-gray-800">
                Our Hotel Rooms
            </h2>
            <p className="text-center max-w-4xl mx-auto text-slate-600 mt-4">
                Discover our luxurious and comfortable hotel rooms, crafted for an unforgettable experience.
            </p>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12 mt-16">
                {hotels.map((hotel) => (
                    <Link href={`/${hotel.id}`} key={hotel.id}>
                        <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
                            {/* Image Section */}
                            <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                                <Image
                                    src={hotel.Image}
                                    alt={hotel.title}
                                    width={420}
                                    height={400}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-sm font-semibold"></p>
                                    <Rating rate={hotel.rating} />
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-all duration-300">
                                    {hotel.title}
                                </h3>
                                <div className="flex items-center justify-between mt-3">
                                    <p className="text-lg font-semibold text-purple-500">From ${hotel.price}</p>
                                </div>

                                {/* Features Section */}
                                <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <BedDoubleIcon size={20} />
                                        <span>{hotel.bed}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User2 size={20} />
                                        <span>{hotel.capacity} Guests</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        </div>
                    </Link>
                ))}
            </ul>
        </Container>
       
    );
}
