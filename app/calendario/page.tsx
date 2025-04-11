"use client";

import Calendar from "@/components/Calendar";

export default function Page() {
    return (
        <div className="mx-auto my-8 max-w-3xl px-4 sm:px-6">
            <div className="max-w-[860px] flex flex-col gap-4">
                <div className="text-center text-xl md:text-3xl">
                    <h1>
                        Calendário
                    </h1>
                </div>
                <div className="flex items-center justify-center bg-gray-50">
                    <Calendar />
                </div>
            </div>
        </div>
    );
}