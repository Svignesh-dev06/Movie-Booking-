import { useState,useEffect } from "react";
import axios from "axios";


function Hero() {
  const [heroimage, setHeroimage] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-crud-one.vercel.app/product")
      .then((response) => {
        setHeroimage(response.data);
      })
      .catch((error) => {
        console.log("Error Fetching Movie", error);
      });
  }, []);

  if (heroimage.length === 0) {
    return (
      <div className="hero-container hero-loading" role="status" aria-busy="true">
        <span className="hero-loader" aria-hidden="true" />
        <span>Loading featured movies...</span>
      </div>
    );
  }

  return (
    <section className="hero-container" aria-label="Featured movies">
      <div
        className="hero-track"
        style={{ "--hero-duration": `${heroimage.length * 5}s` }}
      >
        {[...heroimage, ...heroimage].map((movie, index) => (
          <img
            key={`${movie._id || "movie"}-${index}`}
            className="hero-image"
            src={movie.image}
            alt={index < heroimage.length ? movie.name || "Movie banner" : ""}
            aria-hidden={index >= heroimage.length}
          />
        ))}
      </div>

      <div className="hero-overlay">
        <p className="hero-subtitle">WELCOME TO OUR WEBSITE</p>

        <h1>Explore Our Website</h1>

        <p className="hero-description">
          Discover amazing movies and explore your next favourite film.
        </p>

        <button
          className="view-pages"
          onClick={() => {
            document
              .getElementById("movies")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Pages
        </button>

      </div>
    </section>
  );
}

export default Hero;
