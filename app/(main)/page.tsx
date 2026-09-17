import HomeClient from "./home-client";
import { fetchEvents } from "../../lib/api";

// Re-fetch Facebook events at most once an hour
export const revalidate = 3600;

const Home = async () => {
  const events = await fetchEvents();
  return <HomeClient events={events} />;
};

export default Home;
