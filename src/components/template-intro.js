/*
    Base template with a code block beneath.
*/

import React, { useEffect, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

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

            // LOAD FONT
            new Raffaello_Font({ name: 'RTSNeue-Medium', url: '/raffaello-docs/assets/fonts/RTSNeue-Medium.woff2'});

    
            // ╔════════════╗
            // ║   SCRIPT   ║
            // ╚════════════╝ 
            new class {
                constructor() {
                    // Chope le container de l'image
                    this.container = containerRef.current;
            
                    // Initialization du canvas (caché)
                    this.canvas = new Raffaello_Canvas({ 
                        width: 1080,
                        height: 1350,
                        previewContainer: this.container.querySelector('.js-previewImage'),
                        nameInputContainer: this.container.querySelector('.js-fileNameInput'),
                    });
            
                    // Initialisation de l'image input
                    this.inputImage = new Raffaello_ImageCropper( this.container, {
                        width: 1080, // half
                        height: 1350,
                        layerIndex: 0,
                        layerRef: this,
                    });

                    // Input image
                    this.img_overlay = new Raffaello_Image({ url: '/raffaello-docs/assets/img/elem/raffaello-logo.png'});

                    // Interactions
                    this.container.querySelector('.js-textInput').addEventListener('input', () => this.canvas.updateLayers([2,3]));
                    this.container.querySelector('.js-titleInput').addEventListener('input', () => this.canvas.updateLayers([3]));
            
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
            
                    // LAYER 1 // SHADOW
                    this.canvas.addLayer().draw(function() {
                        this.drawGradient({
                            x: 0,
                            y: 1350-630,
                            width: 1080,
                            height: 630,
                            direction: 'UP',
                            gradient: [
                                [0.0, 'rgba(0,0,0, 0.7)'],
                                [0.4, 'rgba(0,0,0, 0.35)'],
                                [1.0, 'rgba(0,0,0, 0)'],
                            ]
                        })
                    });

                    // LAYER 2 // TEXT
                    this.canvas.addLayer().draw(function() {
                        this.drawText({
                            text: thisTemplate.container.querySelector('.js-textInput').value,
                            fontFamily: 'RTSNeue-Medium',
                            fontSize: 150,
                            fontLineHeight: 138,
                            fontKerningOptical: true, // default false - (optionnal)
                            fontLetterSpacing: -3, // default 0 - (in prct) - (optionnal)
                            fontFillColor: 'white',
                            textAlign: { // (optionnal)
                                horizontal: 'left', // default left - left / center / right
                                vertical: 'bottom', // default bottom - top / center / bottom
                            },
                            anchorPoint: 'L', // default none - none / true / L - (optionnal)
                            position: {
                                pos_x: 100,
                                pos_y: 1186 ,
                                max_width: 920, // default 0 - 0 > no limit - (optionnal)
                                max_width_rescale: true, // default false - false: line break | true: rescale - (optionnal)
                                max_lines: 3, // default 0 - 0 > no limit - (optionnal)
                            },
                            bounds: [ true, false ], // default  [ true, true ] - include_ascent?, include_descent? - (optionnal)
                        });
                        this.applyFilter(
                            'drop-shadow(0px 0px 60px rgb(0 0 0 / 70%))'
                        )
                    });

                    // LAYER 3 // TITLE + BAR
                    this.canvas.addLayer().draw(function() {
                        const Y_1 = thisTemplate.canvas.layers[2].bounds?.minY;
                        const Y_2 = thisTemplate.canvas.layers[2].bounds?.maxY;

                        this.drawText({
                            text: thisTemplate.container.querySelector('.js-titleInput').value,
                            fontFamily: 'RTSNeue-Medium',
                            fontSize: 50,
                            fontKerningOptical: true, // default false - (optionnal)
                            fontLetterSpacing: 0, // default 0 - (in prct) - (optionnal)
                            fontFillColor: 'black',
                            textAlign: { // (optionnal)
                                horizontal: 'left', // default left - left / center / right
                                vertical: 'bottom', // default bottom - top / center / bottom
                            },
                            textBaseline: 'hanging', // default 'alphabetic' (optionnal)
                            anchorPoint: 'true', // default none - none / true / L - (optionnal)
                            position: {
                                pos_x: 117,
                                pos_y: Y_1 ? Y_1 - 70 : 96 ,
                                max_width: 900, // default 0 - 0 > no limit - (optionnal)
                                max_width_rescale: false, // default false - false: line break | true: rescale - (optionnal)
                                max_lines: 1, // default 0 - 0 > no limit - (optionnal)
                            },
                            bounds: [ true, false ], // default  [ true, true ] - include_ascent?, include_descent? - (optionnal)
                            background: { // (optionnal)
                                fill_color: 'rgba(255, 255, 255, 0.8)',
                                margins: { // default 0 - (optionnal)
                                    top: 13,
                                    bottom: 13,
                                    right: 17,
                                    left: 17,
                                },
                            },
                        });

                        this.drawRect({
                            x: 0,
                            y: Y_1,
                            width: 60,
                            height: Y_2 - Y_1,
                            color: "#71ADFF",
                        });
                        
                    });

                    // LAYER 4 // IMAGE
                    this.canvas.addLayer().draw(function() {
                        this.drawImage(
                            thisTemplate.img_overlay.img, // Image ref
                            863, 26, // Position
                            384*0.5, 333*0.5 // Taille
                        );
                        this.applyFilter(
                            'drop-shadow(-8px 8px 50px rgb(0 0 0 / 40%))'
                        )
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
                    <div className="flex-row pending" style={{ width: '30%', gap: '15px' }}>
                        <div className="flex-row full-width" style={{ padding: '0px 5px', gap: '10px' }}>
                            <div className="raffaello-imageFiltres" />
                        </div>
                        <textarea className="js-titleInput" placeholder="Add a title" rows="1" style={{resize: 'none'}} defaultValue="Title above"></textarea>
                        <textarea className="js-textInput" placeholder="Add a text" rows="4" style={{resize: 'none'}} defaultValue="Lorem ipsum&#10;dolor sit amet"></textarea>
                    </div>

                    <div className="separateur" />

                    {/* PREVIEW AND DOWNLOAD */}
                    <div className="flex-row pending" style={{ width: '30%', gap: '15px' }}>
                        <img className="js-previewImage center" src="/raffaello-docs/assets/img/preview/template-intro.jpg" alt="preview" style={{ width: '100%' }}/>
                        <div className="flex-column" style={{ gap: '10px' }}>
                            <input className="js-fileNameInput" type="text" placeholder="File Name" defaultValue='myNewPic.jpg' style={{ flexGrow: 1 }} />
                            <button className="js-downloadButton" style={{ width: '100px' }}>
                                {/* <img src="src/svg/download.svg" alt="download" style={{ height: '80%' }} /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" style={{enableBackground:'new 0 0 48 48', height: '80%'}}  viewBox="0 0 48 48"><path fill="#fff" d="M11 40c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1v-7.1h3V37h26v-7.1h3V37c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9H11zm13-7.7-9.6-9.6 2.1-2.2 6 6V8h3v18.6l6-6 2.2 2.2-9.7 9.5z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
