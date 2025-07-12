import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const HeroSectionAbout = ({
  title,
  subtitle,
  description,
  backgroundImage,
  overlayColor = "rgba(0,0,0,0.5)",
  textColor = "text-white",
  className = "",
}) => {
  return (
    <section
      className={clsx("relative section-spacing", className)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20">
        <div className="animate-on-scroll max-w-5xl mx-auto">
          <h1 className={clsx("responsive-heading font-bold font-poppins mb-6", textColor)}>
            {title}
          </h1>
          <p className={clsx("responsive-subheading opacity-90 mb-8 text-xl font-semibold", textColor)}>
            {subtitle}
          </p>
          <p className={clsx("responsive-text max-w-3xl mx-auto opacity-80", textColor)}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

HeroSectionAbout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  overlayColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
};

export default HeroSectionAbout;
