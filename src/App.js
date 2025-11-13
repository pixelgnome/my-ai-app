import { useState } from "react";
import { VinylForm } from "./components/VinylForm.jsx";
import { Disc3 } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        There are nmistakes!
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Disc3 className="w-12 h-12 text-purple-500 animate-spin-slow" />
          </div>
          <h1 className="text-purple-400 mb-2 tracking-wider">VINYL SEEKER</h1>
          <p className="text-zinc-500">Track your vinyl collection</p>
        </div>
        {/* Form */}
        <VinylForm />
      </div>
    </div>
  );
}
