import { getEvents } from "@/lib/api";
import EventsClient from "./EventsClient";

export default async function EventsPage() {
  const events = await getEvents();

  return <EventsClient events={events} />;
}