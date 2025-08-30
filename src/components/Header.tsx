function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-semibold">App Template</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6">
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Docs</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Learn</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Showcase</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <input
                        placeholder="Search documentation..."
                        className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 bg-gray-50 rounded-lg border"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;