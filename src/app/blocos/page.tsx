import { Metadata } from "next";
import Link from "next/link";
import "../globals.css";
import PageBlocks from "@/components/PageBlocks";

export const metadata: Metadata = {
  title: "Blocos (Atualiza .json)",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 mb-8 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link
          href="/"
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          &lt;Home&nbsp;/&gt;
        </Link>
        <Link
          href="/blocos"
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          Blocos&nbsp;
          <code className="font-mono font-bold">.json</code>
        </Link>
      </div>

      <PageBlocks />
    </main>
  );
}
