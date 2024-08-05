import { useState } from 'react';
import { Paw } from 'lucide-react';

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  const dogBreeds = [
    { name: 'Labrador Retriever', description: 'Friendly and outgoing' },
    { name: 'German Shepherd', description: 'Intelligent and versatile' },
    { name: 'Golden Retriever', description: 'Gentle and affectionate' },
    { name: 'Bulldog', description: 'Calm and courageous' },
    { name: 'Beagle', description: 'Merry and curious' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Paw className="mr-2" /> All About Dogs
        </h1>
        <img
          src="/placeholder.svg"
          alt="A cute dog"
          className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-md mb-8"
        />
        <p className="text-lg mb-6">
          Dogs are known as man's best friend, and for good reason. These loyal companions
          have been by our side for thousands of years, offering unconditional love,
          protection, and companionship. From working dogs to lap dogs, there's a breed
          for every lifestyle and preference.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Popular Dog Breeds</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {dogBreeds.map((breed) => (
            <li
              key={breed.name}
              className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setSelectedBreed(breed)}
            >
              <h3 className="font-semibold">{breed.name}</h3>
              <p className="text-gray-600">{breed.description}</p>
            </li>
          ))}
        </ul>
        {selectedBreed && (
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">You selected: {selectedBreed.name}</h3>
            <p>{selectedBreed.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
