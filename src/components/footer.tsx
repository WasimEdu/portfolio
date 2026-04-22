const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="absolute bottom-0 z-50 flex w-full items-center justify-center gap-2 py-4 font-mono tracking-tighter">
            <p>&copy; {currentYear} Your Name</p>
            <span className="font-normal">|</span>
            <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                GitHub
            </a>
        </footer>
    );
};

export default Footer;
