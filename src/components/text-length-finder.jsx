import { useState, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import 'fvuarjs/styles/fvuar.min.css';
import Fvuar from 'fvuarjs';

function TextLengthFinder() {
    const textarea = useRef();
    const [textLength, setTextLength] = useState(0);
    const handleChange = (tLength) => {
        setTextLength(tLength);
    }
    return (
        <div className="w-full p-2 md:p-0 md:w-3/4 m-auto">
            <header className="text-4xl font-bold text-center md:text-6xl lg:text-8xl">
                <h1 className="font-concertOne text-blue-600 dark:text-blue-500">Text Length Finder</h1>
            </header>
            <main>
                <div className="my-10">
                    <span className="font-light text-sm text-slate-500 dark:text-slate-400">The purpose of the application is simple and very easy to use. Enter any text in the writable area below, for example: <code>text length finder</code> will find how many characters long this text is for you and display it under the writable area. If you wish, you can copy this text length by clicking the <code>copy</code> button.</span>
                </div>
                <div className="flex flex-col mt-10">
                    <textarea
                        ref={textarea}
                        className="relative bg-slate-50 dark:bg-slate-900 p-2 border-2 w-full rounded-sm resize-none focus:outline-slate-500 focus:outline-offset-2"
                        name="putInput"
                        id="putInput"
                        rows={10}
                        placeholder="type something..."
                        onChange={(e) => handleChange(e.target.value.length)}>

                    </textarea>
                </div>
                <div className="flex justify-between w-full text-center gap-2 bg-slate-50 dark:bg-slate-900 rounded-sm p-4">
                    <span>{
                        textLength === 0
                            ? <div><span>Fill in the field above to see the Text Length.</span> <button className="opacity-0 py-1">hidden</button></div>
                            : <div className="w-full flex gap-4 items-center justify-between">
                                <div className="py-1"><span className="text-slate-500">Text Length</span> <span className="font-bold">{textLength}</span></div>
                                <div className="flex gap-4">
                                    <CopyToClipboard
                                        text={textLength}
                                        onCopy={() => Fvuar.new({ theme: 'success', text: "Copied Clipboard", position: 'bottom-center' })}>
                                        <button
                                            type="button"
                                            className="p-1 text-sm transition-colors outline outline-1 outline-blue-600 hover:outline-blue-500 hover:outline-offset-2 text-blue-500 rounded-lg">copy length</button>
                                    </CopyToClipboard>
                                    <button
                                        type="button"
                                        className="p-1 text-sm transition-colors outline outline-1 outline-red-600 hover:outline-red-500 hover:outline-offset-2 text-red-500 rounded-lg"
                                        onClick={() => { textarea.current.value = ""; setTextLength(0) }}>clear textarea</button>
                                </div>
                            </div>
                    }</span>
                </div>
            </main>
            <footer className="w-full rounded mt-10 relative bottom-0 left-0 flex justify-center bg-gray-800 text-white p-4">
                <span className="text-center">
                    &copy; {new Date().getFullYear()} ahmetcanisik
                </span>
            </footer>
        </div>
    );
}


export default TextLengthFinder;