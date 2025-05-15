'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TeaserWebsite() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center text-blue-400"
      >
        FRONTLINE: ECLIPSE
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-xl text-center max-w-xl"
      >
        Squad up in a post-apocalyptic battlefield where tech meets survival.
        Join AI-powered allies in high-speed tactical warfare.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Image
          src="/images/frontline-hud.png"
          alt="Frontline Eclipse Screenshot"
          width={900}
          height={500}
          className="rounded-2xl shadow-xl border border-blue-500"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <Button className="bg-blue-600 text-white text-lg px-6 py-3 rounded-2xl hover:bg-blue-500">
          🔥 Pre-Register Now
        </Button>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black px-6 py-3 rounded-2xl">
          🎬 Watch Teaser
        </Button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="text-gray-400 text-sm text-center"
      >
        Coming to Android & iOS | Powered by Unreal Engine 5
      </motion.p>
    </main>
  );
}
