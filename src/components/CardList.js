import Card from "./Card";

const CardList = ({ testData }) => {
  return (
    <div className="mb-[50px]">
      {testData.map((profile) => (
        <Card {...profile} profile={profile} />
      ))}
    </div>
  );
};

export default CardList;
