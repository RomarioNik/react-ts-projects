type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => {
  return (
    <div className="title">
      <h2>{text || "Default title"}</h2>
      <div className="title-underline"></div>
    </div>
  );
};
