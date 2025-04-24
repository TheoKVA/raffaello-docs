
import React, { useEffect, useRef } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


export default function TestV1Demo() {
    // Grab the reference for the script later on
    //     <div ref={containerRef}>My content</div>
    //     const container = containerRef.current;
    const containerRef = useRef(null);

    useEffect(() => {
        const wait = () => {
            if (window.Raffaello_Canvas && Raffaello_ImageCropper) {
              
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

            } else {
                console.log('RAFFAELLO not ready yet.')
                setTimeout(wait, 100);
            }
        };
        wait();
    }, []);

    // ╔═════════════╗
    // ║  🌳 HTML 🌳  ║
    // ╚═════════════╝ 

    return (
    <Tabs>
        <TabItem value="preview" label="🔍 Preview" default>
            <div ref={containerRef} className="css-template-container flex-row" style={{ gap: '15px' }}>
                <h2>Test V1 🚁</h2>
                <p>Cropper avec drawRect rouge.</p>
                <div className="full-width flex-column" style={{ gap: '20px' }}>

                    {/* IMAGE INPUT CONTAINER */}
                    <div className="flex-row" style={{ width: '40%', gap: '5px' }}>
                        <div className="raffaello-imageContainer" style={{ height: '300px' }}>
                            <img className="raffaello-cropperContainer" alt="cropper preview" />
                        </div>
                        <div className="raffaello-cropperRestart" />
                    </div>

                    {/* FILTERS AND SETTINGS */}
                    <div className="flex-column pending" style={{ width: '25%', gap: '15px' }}>
                        <div className="flex-row full-width" style={{ padding: '0px 5px', gap: '10px' }}>
                            <div className="raffaello-imageFiltres" />
                        </div>
                    </div>

                    <div className="separateur" />

                    {/* PREVIEW AND DOWNLOAD */}
                    <div className="flex-row pending" style={{ width: '35%', gap: '15px' }}>
                        <img className="js-previewImage center" src="web-rtsch/src/preview_GENERAL_simple.jpg" alt="preview" style={{ width: '100%' }}/>
                        <div className="flex-column" style={{ gap: '10px' }}>
                            <input className="js-fileNameInput" type="text" placeholder="Nom du Fichier" style={{ flexGrow: 1 }} />
                            <button className="js-downloadButton" style={{ width: '100px' }}>
                                <img src="src/svg/download.svg" alt="download" style={{ height: '80%' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </TabItem>


{/* ╔════════════════╗ */}
{/* ║   SCRIPT TAB   ║ */}
{/* ╚════════════════╝ */}

        <TabItem value="code" label="💻 Code">
            <CodeBlock language="html">
{`<div class="raffaello-imageContainer">
    <img class="raffaello-cropperContainer" />
</div>

<script>
    const canvas = new Raffaello_Canvas({...});
    canvas.addLayer().draw(function() {
    this.drawRect({ ... });
    });
    canvas.renderPreview();
</script>
`}
            </CodeBlock>
        </TabItem>
    </Tabs>
    );
}


