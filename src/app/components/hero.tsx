import { Container } from './container';
import Image from 'next/image';
import SearchForm from './search-form';

const Hero = () => {
  return (
    <Container className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-10">
      {/* Left Side: Image */}
      <div className="flex justify-center w-full md:w-1/2">
        <Image
          src="/hero.jpg"
          alt="A mountain with ice"
          width={480}
          height={600}
          className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
          priority
        />
      </div>

      {/* Right Side: Text and Search Form */}
      <div className="space-y-6 text-center md:text-left w-full md:w-1/2">
        <p className="text-pink-500 font-semibold text-lg">Book With Us!</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-800 leading-tight font-heading">
          Discover Your  <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Next Adventure
          </span>
        </h1>
        <p className="text-lg text-slate-600">
          Discover amazing places at exclusive deals. Eat, Shop, and visit interesting places around the world.
        </p>
        <div className="p-6 rounded-md bg-white shadow-lg">
          <SearchForm />
        </div>
        <div className="text-xl font-bold text-pink-500 mt-4">From $99 Only!</div>
      </div>
      
    </Container>
  );
};

export default Hero;

