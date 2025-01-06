"use client";

import { useRouter } from "next/navigation"; // For navigation
import { Button } from "@/components/ui/button"; // ShadCN button component

const Homepage = () => {
  const router = useRouter();

  // Function to navigate to the dashboard
  const navigateToDashboard = () => {
    router.push("/dashboard/admin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Homepage</h1>
        <p className="text-gray-600 mb-6">
          Click the button below to navigate to the Dashboard.
        </p>
        <Button
          variant="default" // Default ShadCN button styling
          className="px-6 py-3 bg-blue-500 text-white hover:bg-blue-600"
          onClick={navigateToDashboard}
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
