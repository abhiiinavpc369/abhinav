"use client";

import { useState, useEffect } from "react";

export default function AvailabilityBadge() {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const istTime = now.toLocaleTimeString("en-IN", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
            });
            setCurrentTime(istTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-40 hidden md:block">
            <div className="glass-card px-4 py-3 rounded-full shadow-lg flex items-center gap-3 hover:scale-105 transition-transform">
                <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">Available</span>
                    <span className="text-xs text-foreground/60">{currentTime} IST</span>
                </div>
            </div>
        </div>
    );
}
