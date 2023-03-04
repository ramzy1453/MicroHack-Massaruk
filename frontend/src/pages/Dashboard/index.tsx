import NewsContainer from "../../components/News/NewsContainer";
import SearchBar from "../../components/SearchBar";

export default function Dashboard() {
  return (
    <div className="px-20 py-12">
      <SearchBar />
      <h1 className="mt-4 mb-12 text-3xl font-bold">News</h1>
      <NewsContainer />
    </div>
  );
}
