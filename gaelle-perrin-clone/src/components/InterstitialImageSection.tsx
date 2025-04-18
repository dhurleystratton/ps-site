"use client";

const InterstitialImageSection = ({
  imagePath,
  altText = "Interstitial image"
}: {
  imagePath: string;
  altText?: string;
}) => {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-black/25 z-10" />
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src={imagePath}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: 'center center'
          }}
        />
      </div>
    </section>
  );
};

export default InterstitialImageSection;
