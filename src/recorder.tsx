import { ArrowBigDown, CloudDownload, Download, DownloadCloudIcon, Pause, PauseCircle, PauseCircleIcon, Trash, ChevronDown, ChevronUp, Play, PlayCircle, RefreshCw, StopCircle, X, Delete, HandIcon, Mic, MicOff } from "lucide-react";
import { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { useRef } from "react";



const Recorder = () => {
    const { status, startRecording, pauseRecording, resumeRecording, stopRecording, clearBlobUrl, mediaBlobUrl } =
        useReactMediaRecorder({
            screen: true,
        });
    const [isVideoPreviewOpen, setIsVideoPreviewOpen] = useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={nodeRef}
            className={
                "   z-50 flex p-2 w-[82px]--   flex-col rounded-lg border border-[#eaeaff] bg-white shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] transition-all duration-500 ease-in-out overflow-hidden " +
                (isVideoPreviewOpen
                    ? "max-h-[385px]     "
                    : (mediaBlobUrl)
                        ? "  "
                        : "max-h-[50px]-- ") +
                (status === "recording" ? "border-green-200 " : "") +
                (status === "paused" ? "border-yellow-200 " : "")
            }

        >

            {
                (
                    <div
                        className={
                            'flex  w-full items-center justify-center  transition-all duration-500 ease-in-out ' +
                            ((isVideoPreviewOpen && mediaBlobUrl) ? ' h-[200px]  pb-2 ' : ' h-[0px]  ')
                        }>
                        <video
                            className={"h-full w-full rounded-lg " +
                                (isVideoPreviewOpen ? 'block' : 'hidden')
                            }
                            src={mediaBlobUrl}
                            controls
                        // loop
                        // autoPlay
                        />
                    </div>
                )
            }

            <div className="flex w-full items-center justify-between gap-2 min-h-[32px]">

                {
                    status == "recording" ? (
                        <>
                            <button title="Pause" onClick={() => {
                                pauseRecording()
                            }}>
                                <PauseCircle className="animate-pulse h-6 w-6 text-gray-500 hover:text-black" />
                            </button>

                        </>

                    ) : status != "paused" ? (
                        <button title="Start" onClick={() => {
                            startRecording()

                        }}>
                            <PlayCircle className="h-6 w-6 text-gray-500 hover:text-black" />
                        </button>
                    ) : <>
                        <button title="Stop" onClick={() => {
                            stopRecording()
                        }}>
                            <StopCircle className="h-6 w-6 text-gray-500 hover:text-black" />
                        </button></>
                }

                {
                    // resume button
                    status == "paused" && (
                        <button title="Resume" onClick={() => {
                            resumeRecording()
                        }
                        }>
                            <Play className="h-6 w-6 text-gray-500 hover:text-black" />
                        </button>
                    )
                }

                {
                    mediaBlobUrl && (
                        <a href={mediaBlobUrl} download title="Download"  >
                            <Download className="h-6 w-6 text-gray-500 hover:text-black" />
                        </a>
                    )
                }
                {
                    mediaBlobUrl && (
                        <button title="Clear" onClick={() => {
                            clearBlobUrl()
                        }
                        }>
                            <Trash className="h-6 w-6 text-gray-500 hover:text-black" />
                        </button>
                    )
                }

                {
                    mediaBlobUrl && (
                        // collapse arrow button to toggle video preview
                        <button
                            title="Collapse"
                            onClick={() => {
                                setIsVideoPreviewOpen(!isVideoPreviewOpen)
                            }}>
                            {
                                isVideoPreviewOpen ? (
                                    <ChevronUp className="h-6 w-6 text-gray-500 hover:text-black" />
                                ) : (
                                    <ChevronDown className="h-6 w-6 text-gray-500 hover:text-black" />
                                )
                            }
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default Recorder;