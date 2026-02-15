import { useEffect, useState } from "react";

export default function MobileGate() {
    const TOTAL_TIME = 20;

    const [count, setCount] = useState(TOTAL_TIME);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // Run timer ONLY on mobile
    useEffect(() => {
        if (!isMobile) return;

        if (count === 0) {
            window.location.href = "https://aaditya-dev.vercel.app";
            return;
        }

        const timer = setTimeout(() => {
            setCount((c) => c - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [count, isMobile]);

    // Do not render on desktop
    if (!isMobile) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-950 overflow-hidden px-5 lg:hidden">

            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Ambient Glow */}
            <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] -top-40 -left-40" />
            <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] -bottom-40 -right-40" />

            {/* Card */}
            <div className="relative z-10 max-w-sm w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-7 shadow-2xl text-center">

                {/* Status */}
                <div className="flex items-center justify-center gap-2 mb-4 text-xs text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    System Online
                </div>

                {/* Logo */}
                <div className="text-4xl mb-3">🚀</div>

                {/* Heading */}
                <h1 className="text-2xl font-semibold text-white mb-2">
                    Desktop Experience Required
                </h1>

                {/* Text */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    This portfolio is engineered for large displays to deliver optimal
                    performance and interaction quality.
                </p>

                {/* Progress */}
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-4">
                    <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000"
                        style={{ width: `${(count / TOTAL_TIME) * 100}%` }}
                    />
                </div>

                {/* Redirect */}
                <p className="text-xs text-gray-400 mb-5">
                    Redirecting in{" "}
                    <span className="text-white font-medium">{count}</span>s
                </p>

                {/* Button */}
                <a
                    href="https://aaditya-3d-dev.vercel.app/"
                    className="inline-flex items-center justify-center w-full py-2.5 rounded-xl
                     bg-white/10 hover:bg-white/20 transition font-medium text-white"
                >
                    Open Now
                </a>

                {/* Signature */}
                <p className="text-[11px] text-gray-500 mt-5 tracking-wide">
                    Built by Aaditya Chhatraliya • Web Developer
                </p>

            </div>
        </div>
    );
}
