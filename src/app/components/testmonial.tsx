import Image from "next/image";
import { testmonials } from "../data";
import { Container } from "./container";
import { Rating } from "./rating";

export function Testmonial() {
    return (
        <Container className="py-20">
            {/* Heading */}
            <h2 className="text-4xl mt-8 font-heading font-semibold text-center text-gray-900">
                What our customers are saying
            </h2>

            {/* Subtitle */}
            <p className="text-center max-w-2xl mx-auto text-slate-600 mt-4">
                Hear from our customers about their amazing experiences with us!
            </p>

            {/* Testimonials Section */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
                {testmonials.map((testmonial) => (
                    <div
                        key={testmonial.name}
                        className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
                    >
                        {/* Customer Image */}
                        <Image
                            src={testmonial.image}
                            alt={testmonial.name}
                            width={100}
                            height={100}
                            className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-sm"
                        />

                        {/* Customer Info */}
                        <div className="text-center mt-4">
                            <p className="text-lg font-semibold text-gray-800">{testmonial.name}</p>
                            <p className="text-sm text-slate-500">{testmonial.country}</p>
                        </div>

                        {/* Rating */}
                        <div className="mt-3 flex justify-center">
                            <Rating rate={testmonial.rating} />
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 mt-4 text-center leading-relaxed">
                            {testmonial.description}
                        </p>

                        {/* Decorative Border */}
                        <div className="w-16 h-1 mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
