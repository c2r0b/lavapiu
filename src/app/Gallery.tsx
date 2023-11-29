import Image from 'next/image'
import { Section } from "@/ui/Section";
import { SectionTitle } from "@/ui/SectionTitle";

export const Gallery = () => {
    const galleryImages:galleryImage[] = [];

    return (
        <Section id="gallery" type="dark">
            <SectionTitle>
                Galleria
            </SectionTitle>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            { galleryImages.map(image => (
                <Image
                key={ image.key }
                className="relative border"
                src={ image.src }
                alt={ image.alt}
                width={ image.width }
                height={ image.height }
                priority
                />
            ))}
            </div>
        </Section>
    )
}