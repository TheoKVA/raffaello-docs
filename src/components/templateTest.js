/*
    Base template with a code block beneath.
*/

import React, { useEffect, useRef, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

// (Name of the function is not relevant)
export default function template() {
    // Grab the reference for the script later on
    //     <div ref={containerRef}>My content</div>
    //     const container = containerRef.current;
    const containerRef = useRef(null);
    const [ready, setReady] = useState(false);


    useEffect(() => {
        const waitForRaffaello = () => {
        if (window.Raffaello_Canvas) {
    
            // ╔════════════╗
            // ║   SCRIPT   ║
            // ╚════════════╝ 
            new class {
                constructor() {
                    // Chope le container de l'image
                    this.container = containerRef.current;
            
                    // Initialization du canvas (caché)
                    this.canvas = new Raffaello_Canvas({ 
                        width: 1920,
                        height: 1080,
                        previewContainer: this.container.querySelector('.js-previewImage'),
                        nameInputContainer: this.container.querySelector('.js-fileNameInput'),
                    });
            
                    // Initialisation de l'image input
                    this.inputImage = new Raffaello_ImageCropper( this.container, {
                        width: 1920/2, // half
                        height: 1080,
                        layerIndex: 0,
                        layerRef: this,
                    });
            
                    // Download
                    this.container.querySelector('.js-downloadButton').addEventListener('click', () => this.canvas.downloadImage());
                }
            
                // ON DESSINE SUR LE CANVAS
                initiateDrawing() {
            
                    // Reset layers & capture the context of the template
                    this.canvas.resetLayers();
                    const thisTemplate = this;
            
                    // LAYER 0 // IMAGE INPUT
                    this.canvas.addLayer().draw(function() {
                        this.drawImageInput(thisTemplate.inputImage, 0, 0);
                        this.applyFilter(thisTemplate.inputImage.config.filter);   
                    });
            
                    // LAYER 1 // RED RECTANGLE
                    this.canvas.addLayer().draw(function() {
                        this.drawRect({
                            x: 1920/2,
                            y: 0,
                            width: 1920/2,
                            height: 1080,
                            color: "rgb(187, 54, 54)",
                        });
                    });
            
                    // On fait le rendu
                    this.canvas.renderPreview();
                }
            
            }

            setReady(true);
        } else {
            setTimeout(waitForRaffaello, 100);
        }
        };

        waitForRaffaello();
    }, []);

const code = 
`<div class="raffaello-imageContainer">
    // highlight-next-line
    <img class="raffaello-cropperContainer" />
</div>
<script>
    // highlight-start
    const canvas = new Raffaello_Canvas({...});
    canvas.addLayer().draw(() => { this.drawRect(...) });
    canvas.renderPreview();
    // highlight-end
</script>`;

    return (
        <div style={{ marginBottom: '1rem'}}>

            {/* ╔═════════════╗ */}
            {/* ║  🌳 HTML 🌳  ║ */}
            {/* ╚═════════════╝ */}
            <div ref={containerRef} className="css-template-container flex-row" style={{ gap: '15px' }}>
                
                <div className="full-width flex-column" style={{ gap: '15px' }}>

                    {/* IMAGE INPUT CONTAINER */}
                    <div className="flex-row" style={{ width: '40%', gap: '5px' }}>
                        <div className="raffaello-imageContainer" style={{ height: '300px' }}>
                            <img className="raffaello-cropperContainer" alt="cropper preview" />
                        </div>
                        <div className="raffaello-cropperRestart" />
                    </div>

                    {/* FILTERS AND SETTINGS */}
                    <div className="flex-column pending" style={{ width: '30%', gap: '15px' }}>
                        <div className="flex-row full-width" style={{ padding: '0px 5px', gap: '10px' }}>
                            <div className="raffaello-imageFiltres" />
                        </div>
                    </div>

                    <div className="separateur" />

                    {/* PREVIEW AND DOWNLOAD */}
                    <div className="flex-row pending" style={{ width: '30%', gap: '15px' }}>
                        <img className="js-previewImage center" src="web-rtsch/src/preview_GENERAL_simple.jpg" alt="preview" style={{ width: '100%' }}/>
                        <div className="flex-column" style={{ gap: '10px' }}>
                            <input className="js-fileNameInput" type="text" placeholder="Nom du Fichier" style={{ flexGrow: 1 }} />
                            <button className="js-downloadButton" style={{ width: '100px' }}>
                                {/* <img src="src/svg/download.svg" alt="download" style={{ height: '80%' }} /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" style={{enableBackground:'new 0 0 48 48', height: '80%'}}  viewBox="0 0 48 48"><path fill="#fff" d="M11 40c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1v-7.1h3V37h26v-7.1h3V37c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9H11zm13-7.7-9.6-9.6 2.1-2.2 6 6V8h3v18.6l6-6 2.2 2.2-9.7 9.5z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ╔══════════════╗ */}
            {/* ║  CODE BLOCK  ║ */}
            {/* ╚══════════════╝ */}
            <details style={{ marginTop: '1rem', background: 'var(--ifm-breadcrumb-item-background-active)', padding: '1rem', borderRadius: '6px' }}>
                <summary style={{ fontWeight: 600, cursor: 'pointer' }}>💻 Code</summary>
                <div className="small-code" style={{ marginTop: '0.5rem' }}>
                    <CodeBlock language="html">
                        {code}
                    </CodeBlock>
                </div>
            </details>
        </div>
    );
}
