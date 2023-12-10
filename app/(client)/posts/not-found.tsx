import Header from "@/app/components/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Header title="404 - Page Not Found" />
      <div>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
};