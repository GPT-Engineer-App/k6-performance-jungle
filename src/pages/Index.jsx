import { useState } from 'react';
import { Paw, Heart, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const dogBreeds = [
  { name: 'Labrador Retriever', description: 'Friendly and outgoing', image: 'https://images.unsplash.com/photo-1579213838058-7a3094967f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'German Shepherd', description: 'Intelligent and versatile', image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Golden Retriever', description: 'Gentle and affectionate', image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Bulldog', description: 'Calm and courageous', image: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Beagle', description: 'Merry and curious', image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
];

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold mb-4 flex items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paw className="mr-2" /> Discover the World of Dogs
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Explore different breeds and find your perfect companion
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Why Dogs Make Great Pets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="h-12 w-12 text-red-500" />, title: 'Unconditional Love', description: 'Dogs offer unwavering affection and loyalty.' },
              { icon: <Shield className="h-12 w-12 text-blue-500" />, title: 'Protection', description: 'Many breeds are natural guardians for your home.' },
              { icon: <Star className="h-12 w-12 text-yellow-500" />, title: 'Companionship', description: 'Dogs provide constant friendship and support.' },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Popular Dog Breeds</h2>
          <Tabs defaultValue="grid" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dogBreeds.map((breed) => (
                  <Card key={breed.name} className="overflow-hidden">
                    <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover" />
                    <CardHeader>
                      <CardTitle>{breed.name}</CardTitle>
                      <CardDescription>{breed.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button onClick={() => setSelectedBreed(breed)}>Learn More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="list">
              <div className="space-y-4">
                {dogBreeds.map((breed) => (
                  <Card key={breed.name}>
                    <div className="flex items-center p-4">
                      <img src={breed.image} alt={breed.name} className="w-24 h-24 object-cover rounded-full mr-4" />
                      <div>
                        <CardTitle>{breed.name}</CardTitle>
                        <CardDescription>{breed.description}</CardDescription>
                      </div>
                      <Button className="ml-auto" onClick={() => setSelectedBreed(breed)}>Learn More</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {selectedBreed && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedBreed(null)}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg max-w-lg w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedBreed.image} alt={selectedBreed.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{selectedBreed.name}</h3>
              <p className="mb-4">{selectedBreed.description}</p>
              <Button onClick={() => setSelectedBreed(null)}>Close</Button>
            </motion.div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Index;
