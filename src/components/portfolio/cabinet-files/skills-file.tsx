import {
    FileCaption,
    FileContent,
    FileHeader,
    FileImage,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";

const SkillsFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Skills</FileTitle>
                    <FileCaption>Toolbox</FileCaption>
                </FileHeader>
                <FileText className="space-y-2">
                    <p>
                        <span className="font-medium">AI:</span> LLM APIs, prompt design, function
                        calling, agents, RAG, embeddings, vector search, evals, and guardrails.
                    </p>
                    <p>
                        <span className="font-medium">Engineering:</span> React, TypeScript,
                        Node.js, Python, REST APIs, databases, auth, background jobs, and deployment.
                    </p>
                    <p>
                        <span className="font-medium">Product:</span> UX thinking, rapid
                        prototyping, user feedback loops, performance tuning, and clean handoff.
                    </p>
                </FileText>
            </FileInfo>
            <FileImage className="flex-col gap-2 bg-zinc-50">
                <div className="font-mono text-sm font-medium tracking-tighter">Stack</div>
                <div className="max-w-[230px] text-center font-mono text-xs tracking-tighter text-zinc-500">
                    OpenAI, LangChain, Vercel AI SDK, Supabase, Pinecone, PostgreSQL, React, and
                    Python
                </div>
            </FileImage>
        </FileContent>
    );
};

export default SkillsFile;
