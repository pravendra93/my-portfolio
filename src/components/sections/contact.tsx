"use client";

import { PROFILE } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
    return (
        <footer id="contact" className="py-24 px-4 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-5xl mx-auto w-full text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start a project?</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
                    I'm currently available for freelance projects and open to new opportunities.
                    If you have a project in mind, let's discuss it.
                </p>

                <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-medium text-lg hover:scale-105 transition-transform"
                >
                    Say Hello
                </a>

                <div className="mt-16 flex flex-col items-center gap-4">
                    <div className="flex gap-6">
                        <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href={`mailto:${PROFILE.email}`} className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                    <p className="text-sm text-zinc-500 mt-4">
                        © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
