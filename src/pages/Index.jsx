import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="text-center p-10">
      <h1 className="text-5xl font-bold mb-6">Welcome to Horse Haven</h1>
      <p className="text-lg mb-6">
        Discover the beauty and grace of horses. Join our community to learn, share, and celebrate everything about these magnificent creatures.
      </p>
      <Button variant="primary" size="lg" className="mb-4">Get Started</Button>
      <div className="mt-10">
        <img src="/images/horse-landing.jpg" alt="Horse" className="rounded-lg shadow-lg mx-auto" />
      </div>
    </div>
  );
}

export default Index;