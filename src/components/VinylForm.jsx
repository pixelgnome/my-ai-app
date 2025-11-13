import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Disc, Music, Hash } from "lucide-react";

export function VinylForm() {
  const [formData, setFormData] = useState({
    albumTitle: "",
    artist: "",
    serialNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert(
      `Vinyl added!\n\nAlbum: ${formData.albumTitle}\nArtist: ${formData.artist}\nSerial: ${formData.serialNumber}`
    );
    // Reset form
    setFormData({
      albumTitle: "",
      artist: "",
      serialNumber: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Album Title */}
        <div className="space-y-2">
          <Label
            htmlFor="albumTitle"
            className="text-zinc-300 flex items-center gap-2"
          >
            <Disc className="w-4 h-4 text-purple-400" />
            Album Title
          </Label>
          <Input
            id="albumTitle"
            name="albumTitle"
            type="text"
            placeholder="Enter album title"
            value={formData.albumTitle}
            onChange={handleChange}
            required
            className="bg-zinc-950/80 border-zinc-700 text-white placeholder:text-zinc-600 focus:border-purple-500 focus:ring-purple-500/20"
          />
        </div>

        {/* Musical Artist */}
        <div className="space-y-2">
          <Label
            htmlFor="artist"
            className="text-zinc-300 flex items-center gap-2"
          >
            <Music className="w-4 h-4 text-purple-400" />
            Musical Artist
          </Label>
          <Input
            id="artist"
            name="artist"
            type="text"
            placeholder="Enter artist name"
            value={formData.artist}
            onChange={handleChange}
            required
            className="bg-zinc-950/80 border-zinc-700 text-white placeholder:text-zinc-600 focus:border-purple-500 focus:ring-purple-500/20"
          />
        </div>

        {/* Serial Number */}
        <div className="space-y-2">
          <Label
            htmlFor="serialNumber"
            className="text-zinc-300 flex items-center gap-2"
          >
            <Hash className="w-4 h-4 text-purple-400" />
            Serial Number
          </Label>
          <Input
            id="serialNumber"
            name="serialNumber"
            type="text"
            placeholder="Enter serial number"
            value={formData.serialNumber}
            onChange={handleChange}
            required
            className="bg-zinc-950/80 border-zinc-700 text-white placeholder:text-zinc-600 focus:border-purple-500 focus:ring-purple-500/20"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/20 transition-all duration-300"
        >
          Add to Collection
        </Button>
      </form>

      {/* Decorative Element */}
      <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
        <p className="text-zinc-600">♪ Building your vinyl library ♪</p>
      </div>
    </div>
  );
}
