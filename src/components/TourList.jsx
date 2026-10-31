import useFetchData from "../useFetchData";
import TourCard from "./TourCard";



function TourList() {
  const url = "https://etec-tour.ranavattra.com/api/tours";
  const { data, isLoading, error } = useFetchData(url);
  const tours = data?.data ?? [];

  if (isLoading) {
    return <p role="status">Loading tours...</p>;
  }

  if (error) {
    return (
      <p role="alert">
        Error loading tours: {error.message || "Please try again later."}
      </p>
    );
  }

  if (!tours.length) {
    return <p>No tours are available right now.</p>;
  }

  return (
    <section
      aria-labelledby="tour-list-title"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <h1
        id="tour-list-title"
        className="mb-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
      >
        Explore our tours
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.id || tour.slug} tour={tour} />
        ))}
      </div>
    </section>
  );
}

export default TourList;
