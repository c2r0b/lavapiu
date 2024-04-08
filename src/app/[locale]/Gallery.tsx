import Image from "next/image";
import { useTranslations } from "next-intl";
import { Section } from "@/ui/Section";
import { SectionTitle } from "@/ui/SectionTitle";

const galleryImages: galleryImage[] = [
  {
    key: "gallery-5",
    src: "/images/gallery/5.webp",
    alt: "Gallery image 5",
    width: 800,
    height: 600,
  },
  {
    key: "gallery-6",
    src: "/images/gallery/6.webp",
    alt: "Gallery image 6",
    width: 800,
    height: 600,
  },
  {
    key: "gallery-3",
    src: "/images/gallery/3.webp",
    alt: "Gallery image 3",
    width: 800,
    height: 600,
  },
  {
    key: "gallery-1",
    src: "/images/gallery/1.webp",
    alt: "Gallery image 1",
    width: 800,
    height: 600,
  },
  {
    key: "gallery-2",
    src: "/images/gallery/2.webp",
    alt: "Gallery image 2",
    width: 800,
    height: 600,
  },
];

const Gallery = () => {
  const t = useTranslations("gallery");

  return (
    <Section id="gallery" type="dark">
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image) => (
          <Image
            key={image.key}
            className="relative"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
          />
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
