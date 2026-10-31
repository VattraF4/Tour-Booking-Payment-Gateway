import { useState } from "react";

function TourCard({ tour }) {
  const images =
    tour.tourImages
      ?.slice()
      .sort(
        (a, b) => Number(b.is_primary === true) - Number(a.is_primary === true),
      )
      .map((img) => img.image_url)
      .filter(Boolean) ?? [];

  const [activeImage, setActiveImage] = useState(0);
  const location = tour.location || tour.destination;
  const description = tour.description || tour.excerpt;
  const price = tour.base_price;

  const previousImage = () => {
    setActiveImage((current) => (current - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      {images.length > 0 && (
        <div className="relative">
          <img
            src={images[activeImage]}
            alt={tour.title || "Tour destination"}
            loading="lazy"
            className="h-56 w-full object-cover"
          />
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-1 text-xl text-white hover:bg-black/70"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-1 text-xl text-white hover:bg-black/70"
              >
                ›
              </button>
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={`${image}-${index}`}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show image ${index + 1}`}
                    className={`h-2 w-2 rounded-full ${index === activeImage ? "bg-white" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
      <div className="space-y-3 p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          {tour.title || "Untitled tour"}
        </h2>

        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-3 text-sm text-slate-500">
          {tour.duration_day && <span>Duration: {tour.duration_day} days</span>}
          {tour.duration_night && <span>{tour.duration_night} nights</span>}
          {tour.base_price != null && (
            <span className="font-semibold text-slate-900">
              Price: {tour.base_price}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default TourCard;
