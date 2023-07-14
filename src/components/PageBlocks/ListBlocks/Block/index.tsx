"use client";
import React from "react";

export default function Block({ block }: any) {
  return (
    <a
      // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className="group rounded-lg m-3 border border-transparent flex p-3 items-center mb-1 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        borderRadius: "0 0 50% 50%",
        backgroundColor: "#fff9c4",
        color: "#000000",
        textAlign: "center",
      }}
    >
      <h2 className={`mb- text-2xl font-semibold`}>
        [SELECT]{" "}
        <span className="inline-block transition-transform group-translate-x-1 motion-reduce:transform-none">
          - lorem ipsum
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
    </a>
  );
}
