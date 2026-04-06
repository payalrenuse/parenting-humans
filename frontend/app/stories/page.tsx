import { getStories } from "@/lib/api";
import StoriesClient from "./StoriesClient";

export default async function StoriesPage() {
  const res = await getStories();

  const stories = res.data;

  return <StoriesClient stories={stories} />;
}