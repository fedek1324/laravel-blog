export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto max-w-3xl px-6 py-16">
                <div className="h-5 w-20 animate-pulse rounded bg-slate-800 mb-6" />

                <div className="h-10 w-3/4 animate-pulse rounded-lg bg-slate-800" />
                <div className="mt-2 h-4 w-40 animate-pulse rounded bg-slate-800/60" />

                <div className="mt-8 space-y-3">
                    <div className="h-4 w-full animate-pulse rounded bg-slate-800/60" />
                    <div className="h-4 w-full animate-pulse rounded bg-slate-800/60" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-slate-800/60" />
                    <div className="h-4 w-full animate-pulse rounded bg-slate-800/60" />
                    <div className="h-4 w-2/3 animate-pulse rounded bg-slate-800/60" />
                </div>

                <hr className="my-8 border-slate-800" />

                <div className="h-7 w-48 animate-pulse rounded bg-slate-800 mb-4" />
                <div className="space-y-4">
                    {[1, 2].map(i => (
                        <div key={i} className="rounded-lg border border-slate-800 bg-slate-900 p-4">
                            <div className="h-4 w-32 animate-pulse rounded bg-slate-800" />
                            <div className="mt-2 h-4 w-full animate-pulse rounded bg-slate-800/60" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
