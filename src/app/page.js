"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main style={{ width: "50%", margin: "0 auto", textAlign: "center" }}>
      <button onClick={() => router.push("/home")}>Homepage</button>
      <button onClick={() => router.push("/about")}>Aboutpage</button>
    </main>
  );
}
