import {
    FileCaption,
    FileContent,
    FileHeader,
    FileImage,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";

const ProjectsFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Projects</FileTitle>
                    <FileCaption>Featured</FileCaption>
                </FileHeader>
                <FileText className="space-y-2">
                    <p>
                        <span className="font-medium">DocuMind:</span> a RAG assistant that answers
                        questions from PDFs with citations, chunk previews, and confidence checks.
                    </p>
                    <p>
                        <span className="font-medium">AgentDesk:</span> a browser-based AI agent
                        that drafts emails, updates records, and summarizes customer conversations.
                    </p>
                    <p>
                        <span className="font-medium">EvalKit:</span> a small evaluation dashboard
                        for comparing prompts, model settings, retrieval quality, and failure cases.
                    </p>
                </FileText>
            </FileInfo>
            <FileImage className="flex-col gap-2 bg-zinc-50">
                <div className="font-mono text-sm font-medium tracking-tighter">
                    Project preview
                </div>
                <div className="max-w-[220px] text-center font-mono text-xs tracking-tighter text-zinc-500">
                    Add screenshots, model diagrams, prompt flows, or product demos here
                </div>
            </FileImage>
        </FileContent>
    );
};

export default ProjectsFile;
