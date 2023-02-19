import "./App.css";
import CardList from "./components/CardList";

function App({ title }) {
  const testData = [
    {
      name: "Dan Abramov",
      avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
      company: "@facebook",
    },
    {
      name: "Sophie Alpert",
      avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
      company: "Humu",
    },
    {
      name: "Sebastian Markbåge",
      avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
      company: "Facebook",
    },
  ];
  return (
    <>
      <div className="header font-bold text-3xl font-serif text-center mt-[50px]">
        {title}
      </div>
      <CardList testData={testData} className="mx-auto" />
    </>
  );
}

export default App;
