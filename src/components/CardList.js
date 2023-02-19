import Card from "./Card";

const CardList = ({ testData }) => {
  return (
    <div>
      {testData.map((profile) => (
        <Card {...profile} profile={profile} />
      ))}
    </div>
  );
};

export default CardList;
