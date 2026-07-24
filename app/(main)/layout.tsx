"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/footer";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    router.push("/");
    return null;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-brandBg">
        <main className="flex-1 pt-8 mx-auto min-w-[80%]">{children}</main>
        <Footer />
      </div>
    </>
  );
}
