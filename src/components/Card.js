const Card = ({ profile }) => {
  return (
    <div className="github-profile md:flex md:justify-center pt-[50px] px-4 md:px-0">
      <img
        src={profile.avatar_url}
        alt="image"
        className="w-full md:w-[200px]"
      />

      <div className="info ml-[12px]">
        <div className="name text-2xl text-start font-bold w-[300px]">
          {profile.name}
        </div>
        <div className="company text-2xl text-start mb-[100px]">
          {profile.company}
        </div>
      </div>
    </div>
  );
};

export default Card;
