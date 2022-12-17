const Navbar = () => {
    return (
        <nav className="nav">
            <h1>The New Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a> {/* This wouldn't have worked unless u haven't routed */}
            </div>
        </nav>
    );
}

export default Navbar;