import {
    FileCaption,
    FileContent,
    FileHeader,
    FileImage,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";

const ExperienceFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Experience</FileTitle>
                    <FileCaption>2024-now</FileCaption>
                </FileHeader>
                <FileText className="space-y-2">
                    <p>
                        Built AI assistants for research, customer support, internal operations,
                        and content workflows. Most projects combine React frontends, API services,
                        vector search, prompt orchestration, and observability.
                    </p>
                    <p>
                        Comfortable taking an idea from prototype to deployment: defining the use
                        case, choosing models, wiring tools, testing outputs, and improving quality
                        through feedback loops.
                    </p>
                </FileText>
            </FileInfo>
            <FileImage className="flex-col gap-2 bg-zinc-50">
                <div className="font-mono text-sm font-medium tracking-tighter">
                    Recent focus
                </div>
                <div className="max-w-[230px] text-center font-mono text-xs tracking-tighter text-zinc-500">
                    AI agents, embeddings, vector databases, workflow automations, and human-in-loop
                    review systems
                </div>
            </FileImage>
        </FileContent>
    );
};

export default ExperienceFile;
