export default function Hero() {
    return (
        <section className="bg-[#fafbff] h-[80vh] flex ">
            <div className="pl-70 py-40 pr-30">
                <p className="bg-[#eae9fc] text-[#4f47e5] w-40 p-1 text-center rounded-2xl bo">Industry Leader</p>
                <h1 className="text-7xl font-bold my-10">Turn Your Platform into a Podcast Powerhouse</h1>
                <p className="leading-10 text-[21px]">
                    Complete podcast infrastructure via API. White-label hosting, RSS management, multi-platform distribution, and analytics — without building a single line of infrastructure code.
                </p>
                <div className="flex gap-4 my-6">
                    <button className="bg-[#4f47e5] px-4 py-2 text-white rounded-[7px]">Book a Call</button>
                    <button>Explore Features</button>
                </div>
            </div>
            <div className="pr-70 py-60">
                <div className="border-20 border-solid border-[#e6e6e9] p-10 rounded-3xl">
                    <p className="text-blue-700 leading-15">POST /api/v1/podcasts</p>
                    <pre className="leading-8">
                        {`{
"title": "AI Podcast",
"description": "Creating content..."
}`}
                    </pre>
                    <pre className="text-green-600">
                        {`
✓ Podcast created
✓ RSS feed generated
✓ Distributed to 15+ platforms
                        `}
                    </pre>
                </div>
            </div>
        </section>
    );
}