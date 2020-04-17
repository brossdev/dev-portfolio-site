---
title: Node, Serverless and the IPad Pro Part 1
date: "2020-04-17T10:00:00.169Z"
template: "post"
draft: true
slug: "node-serverless-and-the-ipad-pro-part-1"
category: "iPad-Development"
tags:
  - "Nodejs"
  - "Serverless"
  - "Web Development"
  - “IPad Pro”
  - JavaScript
description: "Part 1 of 3 part tutorial on how to setup an IPad Pro for Developing Serverless API’s using Node Js."
socialImage: "/media/42-line-bible.jpg"
---

- [Apps](#the-first-transition)
- [Prerequisites](#the-digital-age)
- [Loss of humanity through transitions](#loss-of-humanity-through-transitions)
- [Chasing perfection](#chasing-perfection)

An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.

The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.

But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. We have to go 500 years back in time to meet the first one.

## Apps

[Blink Shell](https://apps.apple.com/gb/app/blink-shell-mosh-ssh-client/id1156707581) £19.99 from the App Store


![42-line-bible.jpg](/media/42-line-bible.jpg)

*The 42–Line Bible, printed by Gutenberg.*

But, through this transition, the book lost a large part of its humanity. The machine took over most of the process but craftsmanship was still a part of it. The typefaces were cut manually by the first punch cutters. The paper was made by hand. The illustrations and ornaments were still being hand drawn. These were the remains of the craftsmanship that went almost extinct in the times of Eric Gill.

## Prerequisites

### Digital Ocean Account
For this tutorial we will be setting up a Virtual Private Server(VPS) on a digital ocean droplet, for that you will need a digital ocean account. Digital Ocean is free to sign up for and often has a promotion where you will get free credit for doing so, so its a great place to try out setting up your own VPS!

### Download Blink Shell
As above for this tutorial you will need to purchase and setup Blink Shell on your ipad.



## Introduction

Let's just address the elephant in the room first - Developing on an ipad is not the same as developing on a laptop or desktop, period. Although the Ipad Pro is an extremely capable machine, PadOS for now is pretty limited on what you can do with all that power, particularly as a developer who wants to compile code, and run sometimes multiple servers locally. So why bother? for me my ipad is my favourite piece of hardware, i use it to manage my day to day life, in and out of work and with PadOS 13.4 bringing trackpad support to the IPad, its becoming my go to for most tasks - just not development, yet.  But that doesn't mean its no possible,  yes there are some trade offs (see below), but if you are like me and you like a challenge why not embrace the challenge and maybe learn some things along the way, so lets get started.

## Trade Offs
1. JavaScript Package Managers - if like me you write a lot of javascript code you are going to be familiar with package management, npm, deno etc. Installing and using open source packages is not currently doable on the ipad.
2. Local servers - There are some apps that emulate ways around this - playjs, pythonista , however right not in my experience its just not possible to run a react app on a local webpack server or run a simple nodejs server for local development.
3. Linting and code formatting- one of the first things i do on any JavaScript project is install Eslint and prettier, there are some great code editors on the ipad, by at the time of writing I don’t know of any that let you  lint and format your code on save the way vs code does.


## Setting up the digital ocean droplet

Each transition took away a part of humanity from written language. Handwritten books being the most humane form and the digital typefaces being the least. Overuse of Helvetica is a good example. Messages are being told in a typeface just because it’s a safe option. It’s always there. Everyone knows it but yet, nobody knows it. Stop someone on the street and ask him what Helvetica is? Ask a designer the same question. Ask him where it came from, when, why and who designed it. Most of them will fail to answer these questions. Most of them used it in their precious projects but they still don’t spot it in the street.

<figure>
	<blockquote>
		<p>Knowledge of the quality of a typeface is of the greatest importance for the functional, aesthetic and psychological effect.</p>
		<footer>
			<cite>— Josef Mueller-Brockmann</cite>
		</footer>
	</blockquote>
</figure>

Typefaces don’t look handmade these days. And that’s all right. They don’t have to. Industrialism took that away from them and we’re fine with it. We’ve traded that part of humanity for a process that produces more books that are easier to read. That can’t be bad. And it isn’t.

> Humane typography will often be comparatively rough and even uncouth; but while a certain uncouthness does not seriously matter in humane works, uncouthness has no excuse whatever in the productions of the machine.
>
> — Eric Gill

We’ve come close to “perfection” in the last five centuries. The letters are crisp and without rough edges. We print our compositions with high–precision printers on a high quality, machine made paper.

![type-through-time.jpg](/media/type-through-time.jpg)

*Type through 5 centuries.*

We lost a part of ourselves because of this chase after perfection. We forgot about the craftsmanship along the way. And the worst part is that we don’t care. The transition to the digital age made that clear. We choose typefaces like clueless zombies. There’s no meaning in our work. Type sizes, leading, margins… It’s all just a few clicks or lines of code. The message isn’t important anymore. There’s no more “why” behind the “what”.

## Chasing perfection

Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. We have to think about the message first. What typeface should we use and why? Does the typeface match the message and what we want to communicate with it? What will be the leading and why? Will there be more typefaces in our design? On what ground will they be combined? What makes our design unique and why? This is the part of humanity that is left in typography. It might be the last part. Are we really going to give it up?

*Originally published by [Matej Latin](http://matejlatin.co.uk/) on [Medium](https://medium.com/design-notes/humane-typography-in-the-digital-age-9bd5c16199bd?ref=webdesignernews.com#.lygo82z0x).*