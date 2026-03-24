import type { Metadata } from "next";
import MindMap from "./MindMap";

export const metadata: Metadata = {
  title: "To-Do Mind Map — Société à Mission Europe",
  robots: "noindex, nofollow",
};

export default function TodoPage() {
  return <MindMap />;
}
