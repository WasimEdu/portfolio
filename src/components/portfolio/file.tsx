import { animate, motion, useMotionValue, useMotionValueEvent } from "motion/react";
import React from "react";
import blackTab from "@/assets/images/cabinet/tab-black.png";
import tab from "@/assets/images/cabinet/tab.png";
import { useBrowserEngine } from "@/hooks/use-browser";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const baseDragOptions = {
    rotationAngle: -40,
    rotationYOffset: 50,
};

const clickSpring = {
    type: "spring" as const,
    stiffness: 520,
    damping: 38,
    mass: 0.75,
};

const getDragOptions = (isChromium: boolean, isMobile: boolean) => ({
    ...baseDragOptions,

    // on non chromium browsers, the drag effect is bugged, disabling momentum and elasticity fixes this
    dragMomentum: isChromium && !isMobile,
    dragElastic: isChromium && !isMobile ? 0.05 : 0,

    // increase drag speed on mobile, everything is scaled down on mobile, making dragging slower
    dragConstraintTop: isMobile ? -105 : -250,
    dragSpeedMultiplier: isMobile ? 1.5 : 1,
});

const TAB_OFFSETS = ["left-[60px]", "left-[250px]", "left-[440px]"];

type Props = {
    tabLocation: 0 | 1 | 2;
    title: string;
    isDivider?: boolean;
    index: number;
    children: React.ReactNode;
};

const File = ({ tabLocation, title, children, isDivider = false, index }: Props) => {
    const isMobile = useIsMobile();
    const browserEngine = useBrowserEngine();
    const cardY = useMotionValue(0);
    const [dragY, setDragY] = React.useState(0);
    const [isClickedOpen, setIsClickedOpen] = React.useState(false);
    const tabPointerStart = React.useRef({ x: 0, y: 0 });
    const clickAnimation = React.useRef<ReturnType<typeof animate> | null>(null);

    const tabOffsetClass = TAB_OFFSETS[tabLocation] ?? TAB_OFFSETS[0];
    const dragConfig = getDragOptions(browserEngine === "chromium", isMobile);
    const isOpen = dragY < 0 || isClickedOpen;

    // for 3d effect, when selecting a file however, face user straight on
    const rotation = isOpen ? 0 : dragConfig.rotationAngle;

    // add offset to counteract the file appearing to move up when it rotates
    const yOffset = isOpen ? dragConfig.rotationYOffset : 0;

    // on mobile, apply dragSpeedMultiplier
    const translateY = isMobile
        ? `${dragY * dragConfig.dragSpeedMultiplier + yOffset}px`
        : `${yOffset}px`;

    useMotionValueEvent(cardY, "change", (latestY) => {
        setDragY(latestY);

        if (latestY >= -0.5) {
            setIsClickedOpen(false);
        }
    });

    const toggleOpen = () => {
        const shouldClose = cardY.get() < dragConfig.dragConstraintTop / 2 || isClickedOpen;
        const nextY = shouldClose ? 0 : dragConfig.dragConstraintTop;

        clickAnimation.current?.stop();
        setIsClickedOpen(!shouldClose);
        clickAnimation.current = animate(cardY, nextY, clickSpring);
    };

    return (
        <div className="perspective-[1000px]">
            <motion.div
                drag="y"
                style={{
                    y: cardY,
                    translateZ: `${index * 2}px`,
                    translateY,
                    rotateX: rotation,
                    transformStyle: "preserve-3d",
                }}
                dragConstraints={{ top: dragConfig.dragConstraintTop, bottom: 0 }}
                dragElastic={dragConfig.dragElastic}
                dragTransition={{
                    bounceStiffness: 500,
                }}
                dragMomentum={dragConfig.dragMomentum}
                onDragStart={() => {
                    clickAnimation.current?.stop();
                    setIsClickedOpen(false);
                }}
                className={cn(
                    "bg-background relative flex max-h-[70vh] min-h-[400px] w-[700px] flex-col rounded-lg border p-6",
                    isOpen && "scale-[114%]",
                )}
            >
                <motion.div
                    className={cn(
                        "absolute -top-[37.5px]",
                        tabOffsetClass,
                        isOpen && "pt-[2.5px]",
                    )}
                    style={{
                        rotateX: -rotation,
                        transformStyle: "preserve-3d",
                    }}
                    onPointerDownCapture={(event) => {
                        tabPointerStart.current = { x: event.clientX, y: event.clientY };
                    }}
                    onPointerUpCapture={(event) => {
                        const movedX = Math.abs(event.clientX - tabPointerStart.current.x);
                        const movedY = Math.abs(event.clientY - tabPointerStart.current.y);

                        if (movedX > 5 || movedY > 5) {
                            return;
                        }

                        toggleOpen();
                    }}
                >
                    <div className="relative flex h-full w-full cursor-pointer items-center justify-center">
                        <img
                            src={isDivider ? blackTab : tab}
                            className="w-[200px]"
                            draggable={false}
                        />
                        <div
                            className={cn(
                                "absolute flex w-[145px] justify-between text-base text-[0.925rem] tracking-tight",
                                isDivider ? "text-white" : "text-black",
                            )}
                        >
                            <p>{String(index).padStart(2, "0")}</p>
                            <p>{title}</p>
                        </div>
                    </div>
                </motion.div>
                {children}
            </motion.div>
        </div>
    );
};

export default File;
