import HomeClient from "./home-client";
import { fetchEvents } from "../../lib/api";

const Home = async () => {
  const events = await fetchEvents();
  return <HomeClient events={events} />;
};

export default Home;
