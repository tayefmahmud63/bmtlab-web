import React from "react";

export default function ReachOut() {
    return (
        <div className="max-w-5xl w-full mx-auto px-6 py-10 md:px-20 text-gray-800 text-center">
            <span className="px-2 py-1 text-xs border border-gray-300 rounded-full">
                Reach Out To Us
            </span>
            <h1 className="text-4xl font-bold mt-4">
                We'd love to Hear From You.
            </h1>
            <p className="mt-4">
                Or just reach out manually to{" "}
                <a href="mailto:contact@example.com" className="text-indigo-600 hover:underline">
                    contact@example.com
                </a>
            </p>
        </div>
    );
};