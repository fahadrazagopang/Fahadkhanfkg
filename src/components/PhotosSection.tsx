import React, { useState, useEffect } from 'react';
import { PhotoItem } from '../types';
import { INITIAL_PHOTOS } from '../data/content';
import { Heart, Maximize2, Plus, Upload, X, Sparkles, Image as ImageIcon } from 'lucide-react';

interface PhotosSectionProps {
  onHeartClick: () => void;
}

export const PhotosSection: React.FC<PhotosSectionProps> = ({ onHeartClick }) => {
  const [photos, setPhotos] = useState<PhotoItem[]>(() => {
    const saved = localStorage.getItem('toobuu_photos');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_PHOTOS;
      }
    }
    return INITIAL_PHOTOS;
  });

  const [likesMap, setLikesMap] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('toobuu_photo_likes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return { 'photo-1': 14, 'photo-2': 18, 'photo-3': 20 };
      }
    }
    return { 'photo-1': 14, 'photo-2': 18, 'photo-3': 20 };
  });

  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCaption, setNewCaption] = useState('');
  const [newImageSrc, setNewImageSrc] = useState('');

  useEffect(() => {
    localStorage.setItem('toobuu_photos', JSON.stringify(photos));
  }, [photos]);

  useEffect(() => {
    localStorage.setItem('toobuu_photo_likes', JSON.stringify(likesMap));
  }, [likesMap]);

  const handleLike = (e: React.MouseEvent, photoId: string) => {
    e.stopPropagation();
    onHeartClick();
    setLikesMap((prev) => ({
      ...prev,
      [photoId]: (prev[photoId] || 0) + 1,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setNewImageSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageSrc) return;

    const newPhotoItem: PhotoItem = {
      id: `photo-${Date.now()}`,
      url: newImageSrc,
      alt: newCaption || 'Special Memory',
      caption: newCaption || 'Hamari Yaad ❤️',
      subtitle: 'Fahad & Toobuu',
      isPlaceholder: false,
    };

    setPhotos((prev) => [...prev, newPhotoItem]);
    setLikesMap((prev) => ({ ...prev, [newPhotoItem.id]: 1 }));
    setNewCaption('');
    setNewImageSrc('');
    setIsAddModalOpen(false);
    onHeartClick();
  };

  return (
    <section id="photos" className="py-24 px-4 bg-slate-950/80 border-t border-blue-500/10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3">
            Humari Memories 📸
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hamari special tasveerain.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative rounded-3xl overflow-hidden border border-blue-500/20 bg-slate-900/90 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all duration-300"
            >
              {/* Image Container */}
              <div className="h-80 w-full overflow-hidden relative">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Right Zoom Icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-blue-200">
                    {photo.caption}
                  </h3>
                  {photo.subtitle && (
                    <p className="text-xs text-slate-400">{photo.subtitle}</p>
                  )}
                </div>

                {/* Like Button */}
                <button
                  onClick={(e) => handleLike(e, photo.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-pink-400 text-xs font-semibold hover:bg-pink-600 hover:text-white transition-all group/btn"
                >
                  <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500 group-hover/btn:scale-125 transition-transform" />
                  <span>{likesMap[photo.id] || 0}</span>
                </button>
              </div>
            </div>
          ))}

          {/* Add New Memory Card */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="h-80 rounded-3xl border-2 border-dashed border-slate-700 hover:border-blue-400 bg-slate-900/30 hover:bg-slate-900/60 flex flex-col items-center justify-center text-slate-400 hover:text-blue-300 transition-all p-6 text-center group"
          >
            <div className="w-14 h-14 rounded-full bg-blue-950/80 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Plus className="w-7 h-7 text-blue-400" />
            </div>
            <span className="font-semibold text-lg text-slate-200 mb-1">
              Add New Photo Memory
            </span>
            <span className="text-xs text-slate-400">
              Upload your personal pictures with Toobuu Jaan
            </span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-slate-900 border border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activePhoto.url}
                alt={activePhoto.alt}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 flex items-center justify-between bg-slate-900">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {activePhoto.caption}
                </h3>
                {activePhoto.subtitle && (
                  <p className="text-slate-400 text-sm">{activePhoto.subtitle}</p>
                )}
              </div>
              <button
                onClick={(e) => handleLike(e, activePhoto.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600/20 border border-pink-500/40 text-pink-300 hover:bg-pink-600 hover:text-white transition-all"
              >
                <Heart className="w-4 h-4 fill-pink-500" />
                <span>{likesMap[activePhoto.id] || 0} Likes</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Photo Modal */}
      {isAddModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-slate-900 border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-blue-400" />
              <span>Add Memory Photo</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Upload a picture or paste an image URL to add to your love memories.
            </p>

            <form onSubmit={handleAddPhotoSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                  Upload Image File
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="w-full text-xs text-slate-400 file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-600/30 file:text-blue-300 hover:file:bg-blue-600 hover:file:text-white cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Or Image Web URL
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  value={newImageSrc}
                  onChange={(e) => setNewImageSrc(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Memory Caption
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pehli Mulaqat Punjab Mein ❤️"
                  value={newCaption}
                  onChange={(e) => setNewCaption(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              {newImageSrc && (
                <div className="h-40 rounded-xl overflow-hidden border border-slate-700 bg-black flex items-center justify-center">
                  <img src={newImageSrc} alt="Preview" className="max-h-full max-w-full object-contain" />
                </div>
              )}

              <button
                type="submit"
                disabled={!newImageSrc}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Save To Memories</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
