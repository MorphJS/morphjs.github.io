---
title: "Theory : First steps with Linux Command Line and notes"
date: 2026-10-12
platform: bandit
tags: [linux, ssh, fundamentals]
difficulty: easy
status: draft
---

<!--
Cambia `status: draft` a `status: published` cuando termines.
OverTheWire pide no publicar contraseñas ni soluciones de niveles:
escribe método, fundamentos y errores, no respuestas.
-->

## Goal

Theory : First steps with Linux Command Line and notes

## What I saw

Unix-like OS, it's based on Directory Tree storage, meaning everything is organized on routes that go up or down with branches. | Working with bash that is a command line base communication between human-machine. | In order to navigate, we need to write commands (Most basic being "cd", that inputs the machine to go into a place/folder).

Recognizing the current working place it's easy using PWD (Print working folder). | In case of wanting to know the content of the current workplace, the command is "ls" that can be combined with more attributes like "ls /usr", also some short and long options:

-a | --all
-A | --almost-all
-d | --directory
-F | --classify 
-h | --human-readable
-l 
-r | --reverse
-S
-t 

Most of the commands work with : command -options arguments

Less is use to walk through long archives.

Stopped in Table 3-4: Directories on Linux Systems

## What I got wrong

Knowing how a command can be written most of the time, like the syntax. Most of the time the commands (Like yt-dlp) come with abbreviations, for example -A or -l.

## Defender's view

In order to know and work with computers the user eventually will need to know how to navigate and understand the most direct way to communicate with their devices, and applying bash knowledge takes back control over them.

## Takeaway

Unix-based programs have Tree directories, and use command-line based "BASH", the most common command is CD but there's a lot of everyday options like "ls" that can be use with more options, -a , -A -l. Fundamentally using "command -options arguments".
