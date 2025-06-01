import Button from "@/components/Button";
import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      <div className="flex flex-wrap gap-4 mt-6">
        <Button title="Small Rounded" styles="text-sm px-3 py-1 rounded-sm" />
        <Button title="Medium Rounded" styles="text-base px-4 py-2 rounded-md" />
        <Button title="Large Rounded" styles="text-lg px-5 py-3 rounded-full" />
        <Button title="Extra Rounded" styles="text-base px-4 py-2 rounded-lg" /> {/* ✅ This must be rendered, not just commented */}
      </div>

      <div className="flex flex-wrap gap-6 mt-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;
