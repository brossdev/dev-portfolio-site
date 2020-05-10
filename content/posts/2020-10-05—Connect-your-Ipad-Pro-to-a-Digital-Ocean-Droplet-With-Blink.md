---
title: Connect your iPad Pro to a Digital Ocean Droplet
date: '2020-05-10T10:00:00.169Z'
template: 'post'
draft: false
slug: 'connect-your-ipad-pro-to-a-digital-ocean-droplet'
category: 'IPad-Development'
tags:
  - 'Digital Ocean'
  - 'Web Development'
  - 'IPad Pro'
  - 'VPS'
description: 'Connect your IPad Pro to a Digital Ocean Droplet'
socialImage: '/media/ipad-pro-smart-keyboard.jpg'
---

![Ipad Pro Smart Keyboard](/media/ipad-pro-smart-keyboard.jpg)

- [Apps](##Apps)
- [Prerequisites](##Prerequisites)
- [Introduction](##Introduction)
- [Getting Started](##Getting Started)

## Apps

[Blink Shell](https://apps.apple.com/gb/app/blink-shell-mosh-ssh-client/id1156707581) £19.99 from the App Store

## Prerequisites

#### Digital Ocean Account

For this tutorial we will be setting up a Virtual Private Server(VPS) on a digital ocean droplet, for that you will need a digital ocean account. Digital Ocean is free to sign up for and often has a promotion where you will get free credit for doing so, so its a great place to try out setting up your own VPS!

#### Download Blink Shell

As above for this tutorial you will need to purchase and setup Blink Shell on your ipad.

## Introduction

Let's just address the elephant in the room first - Developing on an ipad is not the same as developing on a laptop or desktop, period. Although the Ipad Pro is an extremely capable machine, PadOS for now is pretty limited on what you can do with all that power, particularly as a developer who wants to compile code, and run sometimes multiple servers locally. So why bother? for me my ipad is my favourite piece of hardware, i use it to manage my day to day life, in and out of work and with PadOS 13.4 bringing trackpad support to the IPad, its becoming my go to for most tasks - just not development, yet. But that doesn't mean its no possible, yes there are some trade offs (see below), but if you are like me and you like a challenge why not embrace the challenge and maybe learn some things along the way, so lets get started.

## Trade Offs

1. JavaScript Package Managers - if like me you write a lot of javascript code you are going to be familiar with package management, npm, deno etc. Installing and using open source packages is not currently doable on the ipad.
2. Local servers - There are some apps that emulate ways around this - playjs, pythonista , however right not in my experience its just not possible to run a react app on a local webpack server or run a simple nodejs server for local development.
3. Linting and code formatting- one of the first things i do on any JavaScript project is install Eslint and prettier, there are some great code editors on the ipad, by at the time of writing I don’t know of any that let you lint and format your code on save the way vs code does.

## Alternatives - Cloud Based IDE

Cloud based IDE’s are extremely powerful tools for a developer, rather than rely on having a powerful machine which can run vs code with your many plugins, you can create customised editors which run on a remote server connected via the browser, powerful but at the time of writing using cloud 9 or visual studio online through the ipad browser is not a great experience.

## Getting Started

That brought me to using a cloud hosted VPS as my best solution. Although this workflow may not be for everyone the purpose of this guide is to document how I use my ipad for developing Front and Backend JavaScript applications, so lets get started.

First if you will need to sign up for a digital ocean account if you don't already have one , it's free to sign up and you can use your google or github account. providing you choose a low tier droplet it shouldn't cost you in more than a few pounds per month to host the environment .

## Setting up the digital ocean droplet

![Digital Ocean Sign Up](/static/media/do-sign-up.png)

Once you have confirmed your account you should see the dashboard below, choose get started with a droplet. For this guide I will use Ubuntu (18.4 at the time of writing) , select standard starter plan and most **importantly **when you are asked to select a plan, scroll to the left to see the cheaper plan options, default is \$40 per month which is far too much for our use case. Scroll along to select the 1gb or 2gb ram plan, stick with the no block storage plan and choose the region most applicable to your location .

In the authentication section , select SSH, if you have just signed up to digital ocean you will need to add a new ssh key. If you downloaded Blink as noted above open the app and type config into the command line, select keys and then click on your current key. From their, Copy the public key to your clipboard.

![Blink Config](/static/media/blink-config.png)

![Blink SSH Key](/static/media/blink-pk.png)

Back on Digital Ocean, select add new ssh key then paste in your ssh key copied from blink.

finally, keep it as 1 droplet, if you wish to rename your server you can, for now there is no need to select backups, now select create droplet and wait for Digital Ocean to create your instance, this should only take a minute or so.

Once your droplet has been created you should see the IP Address on the droplet screen. Copy this and switch over to Blink

Each new droplet instance will be created with a root user, to sign into your newly created instance use the syntax below

```bash
ssh root@my.new.ip.address
```

all going well you should now be signed in to your digital ocean droplet! Congratulations! If you are anything like me this felt like a big win the first time I was signed in to a cloud instance from my ipad.

From here there are a number of things we should do to improve the development experience and keep the instance secure.

**Mosh**

.One of the biggest problems developing on an ipad is that as soon as blink is placed in the background the ssh connection will time out meaning we have to reconnect every time we switch back to blink, thankfully we have the excellent mosh to help with this. Mosh support comes out of the box with blink but we need to configure the VPS to allow mosh connectivity. You can read more information on mosh here - [Mosh](https://mosh.org/)

ssh into your droplet as root user if you are not already inside. From here run each command below one at a time

```bash
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:keithw/mosh
sudo apt-get update
sudo apt-get install mosh

```

When asked if you want to accept the install type yes .

Now that you have installed mosh, you are all set to use it. Exit the vps so you are back to blink terminal, instead of typing ssh root@my.ip.address you can now use mosh root@my.ip.address and you are good to go. There are some differences when using mosh in place of ssh. Digital Ocean have a helpful guide on using mosh on a VPS which you can find here - [DO Mosh on a VPS](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-mosh-on-a-vps)

**Firewall**

Now that we have configured mosh its recommended that we setup a firewall for our vps, you can do this on the VPS however because we are using digital ocean we have the ocean of using the free firewall DO provide which has the added benefit of stopping any unwelcome traffic before it reaches the VPS.

Sign in to digital oceans dashboard, on the top right hand corner select the create button, scroll down to the option titled cloud firewalls.

![Cloud firewalls](/static/media/firewall-config.png)

Enter a name for your firewall , the firewall will have some defaults already set, such as the port for ssh connections, and some default outbound rules.

![Firewall Config](/static/media/cloud-firewall.png)

Leaving the default Config in place for now, scroll to the bottom of the page, search for your droplet using the droplet name or tag then select create firewall.

![Firewall Creation](/static/media/firewall-creation.png)

Now with your firewall created , go back to blink shell and attempt to reconnect to your VPS with mosh and you should receive an error message that mosh is unable to connect - perfect our firewall is working.

In order to use move we need to setup a rule to let mosh connect through ports 60000:60020 through a UDP connection. To do this go back to your firewall configuration in digital ocean and add another inbound rule, select Custom, Protocol - UDP with the ports listed above.

![Inbound Rule](/static/media/inbound-rules-mosh.png)

Click Save to update.

Now if you go back to blink and connect with mosh you should be able to access without any firewall issues.

**Non Root User**

Lastly after configuring your firewall and mosh setup, we should then add a non root user account that we will use from now on to log into the VPS.

To do this once you are logged in as root, type the below commands, replacing remote-user with your choosing username

```bash

adduser remote-user

```

When asked, enter a new unix password for the user, then retype the password you choose, you will then see a screen similar to the below asking you to select the user config, go ahead and fill in this data, or you can choose to leave it blank, select yes when asked if the config is correct.

![Inbound Rule](/static/media/user-information.png)

Now we need to add the newly created user to our sudo group using the command below, replacing remote-user with the username you choose above

```bash
usermod -aG sudo remote-user
```

Finally we need to allow our user to connect to the VPS using SSH . Providing you setup your root user account with SSH, the easiest way we can do this is to sync the ssh keys between users. When logged in as the root user, run the command below, replacing remote-user with the name of your newly created user

```bash
rsync --archive --chown=remote-user:remote-user ~/.ssh /home/remote-user

```

Now all that is left to do is to sign out as your root user and sign back in with your newly created user account

```bash

mosh remote-user@your.ip.address

```

Note - digital ocean has a great write up and adding new users to the VPS in their tutorial pages which is really useful for debugging issues.

And that's it, you can now successfully shh into to your Digital Ocean Droplet with your IPad Pro!
