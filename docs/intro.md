---
sidebar_position: 1
title: Introduction
description: Introduction page
slug: /
---

# Introduction

Welcome to the documentation of <b>RAFFAELLO.js</b> !

<b>RAFFAELLO.js</b> is a comprehensive JavaScript library developped for RTS - Radio Television Suisse. It is a seamless solution for remote image creation. It is design to empower users to generate images on the fly, right from their web browser.

This documentation will cover the integration and usage of RAFFAELLO. From typical web application, focusing on specific use cases that demonstrates its features, to more niche solutions to enpower the users with unique abilities.


## What is it and why ?

The RAFFAELLO JavaScript library was developped to provide a suite of custom classes and objects for image template creation, manipulation and editing. Allowing users to use custom input images, apply filters, add graphical elements and perform various other editing tasks. 

## How it works

RAFFAELLO is an object-oriented augmented [`Canvas API`](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) library with custom classes to fit it's specific need. It is written in Vanilla JS. 
The core method is that it creates dedicated `Canvas` HTML elements that you can then easilly manipulate and change on the go. Because it is based on Canvas, a widelly supported feature, all the processing happens on the client browser.
Based on an HTML template the user can create as many images as he needs.

The main addon of RAFFAELLO is that it mimics the way most design software works by having an architecture in layers, that renders atop of each others. 

```text
      RAFFAELLO CANVAS
     ╒════════════════╕
     │                │
   ╒═╧══════════════╕ │
   │ ┊              │ │
 ╒═╧══════════════╕ │ │ > LAYER 0
 │ ┊ └ ┉ ┉ ┉ ┉ ┉  │ ╞═╛
 │ ┊              │ │ > LAYER 1
 │ └ ┉ ┉ ┉ ┉ ┉ ┉  ╞═╛
 │                │ > LAYER 2
 ╘════════════════╛
```
This layer architecture has multiple advantages:
- `Effects` can be added indivudually on the layers and not blogbally.
- Drawing `Text` on a layer add dynamic `bound` properties to this layers, wich can be used to draw on another layer using `this.canvas.layers[x].bounds.minX` for exemple.
- It prevent the need to redraw all the canvas, just to update a small part of it.

## Features

- **Simplified inputs**: RAFFAELLO streamlines the image creation process by offering a simple set of inputs. Users fill in text content, adjust text fields, and upload images for seamless integration into the final design.

- **Intuitive UI**: Designed with simplicity in mind, it offers an intuitive UI that makes image creation effortless. With streamlined workflows and user-friendly controls, making visuals is a breeze for users of all skill levels.

- **Client-Side rendering**:  all image generation occurs client-side, without any server-side processing. This approach ensures fast and responsive performance, enabling users to preview and fine-tune their designs in real-time.

- **Seamless workflow**: Without the complexity of an image editing tool, RAFFAELLO offers a seamless workflow, where users can focus on editorial content without getting bogged down by technical details. Automatic adjustments and intelligent presets ensure a smooth and efficient design process.


## Main files

```text
raffaello/
    ├── raffaello.min.js
    └── raffaello.min.css
```

RAFFAELLO has 2 main files, `raffaello.min.js` and `raffaello.min.css`.

It has a bundeled depedencie to [cropper.js](https://github.com/fengyuanchen/cropperjs/tree/main), a custom library by **Fengyuan Chen**, to reference input images and be able to crop them to size.

## Basic usage

RAFFAELLO is loaded on a static HTML file, so that the user loads it all when connecting the the page template, then fills the info and the image is created client-side.

The typical worklfow to use RAFFAELLO is:
1. Add all the necessary inputs in your HTML page
2. Add a JS script in which you:
    - Setup an instance of RAFFAELLO, which is equivalent to declaring a hidden blank `Canvas`.
    - Link all the HTML `Inputs` to the JS variables to make the images.
    - Draw on the canvas, with successives `Layers`.
    - Link the `Inputs` changes to specific `Layers` to be redrawn.
