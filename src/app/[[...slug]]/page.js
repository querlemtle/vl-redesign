import "./../../reset.css";
import "./../../index.css";
import "./../../global.css";
import { ClientOnly } from "./client";


export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <ClientOnly />;
}
