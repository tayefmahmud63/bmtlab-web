import { TestTube, FileChartColumn, Zap, Lightbulb } from 'lucide-react'

export function Features() {
    return (
        <section className="pt-0 pb-16 md:pb-32">
            <div className="mx-auto max-w-xl md:max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Building Systems that you can trust</h2>
                            <p className="mt-6">Bridging hardware and software to deliver intelligent, connected, and dependable solutions.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Lightbulb className="size-5" />
                                ⁠Ideation & Planning
                            </li>
                            <li>
                                <Zap className="size-5" />
                                Design & Development
                            </li>
                            <li>
                                <TestTube className="size-5" />
                                Testing & Deployment
                            </li>
                            <li>
                                <FileChartColumn className="size-5" />
                                Monitoring & Optimization
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3 ">
                        <div className="bg-gradient-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <img src="/images/mockup-1.webp" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
