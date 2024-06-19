import Image from 'next/image';

interface NewsletterImageProps {
  title: string;
  image: string;
}

const NewsletterImage = ({ title, image }: NewsletterImageProps) => (
  <div className="relative w-full h-[201px] mb-4 overflow-hidden flex justify-center items-center">
    <h3
      id={`heading-${title}`}
      className="text-3xl font-bold text-white font-merriweather absolute drop-shadow-[1px_1px_1px_rgba(0,0,0,0.3)]"
    >
      {title}
    </h3>
    <Image
      className="w-full h-full"
      src={image}
      alt={`Image for ${title}`}
      layout="fill"
      objectFit="cover"
    />
  </div>
);

export default NewsletterImage;
