const Card = ({ profile }) => {
  return (
    <div className="github-profile flex justify-center pt-[50px]">
      <img
        src={profile.avatar_url}
        alt="image"
        className="mr-[30px] w-[100px]"
      />
      <div className="info ml-[12px]">
        <div className="name text-2xl text-start font-bold w-[300px]">
          {profile.name}
        </div>
        <div className="company text-2xl text-start">{profile.company}</div>
      </div>
    </div>
  );
};

export default Card;
