import { useContent } from "../hooks/useContent";

function Content() {
    const { result, onClickGetSomething } = useContent();

    return (
        <main className="ml-64 min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-8">
                <button onClick={onClickGetSomething} className="bg-black text-white">Get Something</button>
                {result && (
                    <div className="mt-4">
                        <h3 className="font-bold text-xl">title: {result.title}</h3>
                        <p className="text-sm">{result.body}</p>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Content;