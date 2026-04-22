import {
    FileCaption,
    FileContent,
    FileHeader,
    FileImage,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";

const IntroFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Intro</FileTitle>
                    <FileCaption>AI Developer</FileCaption>
                </FileHeader>
                <FileText className="space-y-2">
                    <p>
                        I design and build AI-powered applications that turn messy workflows into
                        useful tools. My work focuses on LLM integrations, retrieval-augmented
                        generation, agentic automation, and clean interfaces that make complex AI
                        systems feel simple.
                    </p>
                    <p>
                        I enjoy working across the full stack: shaping product ideas, connecting
                        APIs, building data pipelines, evaluating model outputs, and shipping
                        polished web experiences.
                    </p>
                </FileText>
            </FileInfo>
            <FileImage className="flex-col gap-2 bg-zinc-50">
                <div className="font-mono text-sm font-medium tracking-tighter">AI Systems</div>
                <div className="max-w-[220px] text-center font-mono text-xs tracking-tighter text-zinc-500">
                    LLM apps, retrieval pipelines, agents, evaluation loops, and production UX
                </div>
            </FileImage>
        </FileContent>
    );
};

export default IntroFile;
