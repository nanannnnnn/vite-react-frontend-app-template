function Sidebar() {
    return (
        <aside className="fixed left-0 top-16 z-30 w-64 h-[calc(100vh-4rem)] border-r border-gray-200 bg-white overflow-y-auto">
            <nav className="p-6">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">link</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="block text-sm text-blue-600 font-medium hover:text-blue-800">Installation</a></li>
                            <li><a href="#" className="block text-sm text-gray-700 hover:text-gray-900">Project Structure</a></li>
                            <li><a href="#" className="block text-sm text-gray-700 hover:text-gray-900">Building Your Application</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar;