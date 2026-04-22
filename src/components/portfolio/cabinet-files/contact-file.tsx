import {
    FileCaption,
    FileContent,
    FileHeader,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";

const ContactFile = () => {
    return (
        <FileContent className="items-start">
            <FileInfo className="w-full max-w-none">
                <FileHeader>
                    <FileTitle>Contact</FileTitle>
                    <FileCaption>Available</FileCaption>
                </FileHeader>
                <FileText className="max-w-[560px]">
                    Open to AI product work, automation builds, prototype-to-production projects,
                    and collaborations where software can save people time or unlock better
                    decisions.
                </FileText>
                <div className="mt-4 flex flex-col gap-2 font-mono text-sm tracking-tighter">
                    <a
                        className="mb-2 w-fit border px-3 py-1 font-medium transition-colors hover:bg-foreground hover:text-background"
                        href="/resume.pdf"
                        download
                    >
                        Download resume
                    </a>
                    <a className="w-fit border-b" href="mailto:hello@example.com">
                        hello@example.com
                    </a>
                    <a
                        className="w-fit border-b"
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/your-username
                    </a>
                    <a
                        className="w-fit border-b"
                        href="https://linkedin.com/in/your-name"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        linkedin.com/in/your-name
                    </a>
                </div>
            </FileInfo>
        </FileContent>
    );
};

export default ContactFile;
