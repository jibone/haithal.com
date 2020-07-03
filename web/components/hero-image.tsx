type Props = {
  imgName: string;
};

const HeroImage = ({ imgName }: Props) => {
  const imgPath = `/assets/${imgName}`;

  return (
    <section className="mb-12 shadow-1g col-span-3">
      <img className="w-full" src={imgPath} />
    </section>
  );
};

export default HeroImage;
