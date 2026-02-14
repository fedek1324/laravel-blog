export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-16">
                <div className="flex items-center justify-between gap-4">
                    <div className="h-10 w-40 animate-pulse rounded-lg bg-slate-800" />
                    <div className="h-10 w-36 animate-pulse rounded-lg bg-slate-800" />
                </div>

                <div className="flex flex-col gap-4 mt-8">
                    <div className="h-7 w-32 animate-pulse rounded bg-slate-800" />
                    {[1, 2, 3].map(i => (
                        <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                            <div className="h-6 w-3/4 animate-pulse rounded bg-slate-800" />
                            <div className="mt-3 h-4 w-full animate-pulse rounded bg-slate-800/60" />
                            <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-slate-800/60" />
                            <div className="mt-4 h-3 w-24 animate-pulse rounded bg-slate-800/40" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
