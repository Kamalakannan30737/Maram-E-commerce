export default function PageHolder({ title, description }) {
    return (
        <section className="min-h-[65vh] flex flex-col items-center justify-center px-6 items-center">
            <h1 className="font-bold text-2xl text-gray-700">
                {title}
            </h1>
            <p className="text-xl text-gary-300">
                {description}
            </p>
        </section>
    )
}