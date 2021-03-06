# Haxe and Node.js

I wanted to do a quick prototype with Node.js and my favorite programming language Haxe.
But I couldn't find any documentation on how to start.

There used to be a website (an old one, from when Haxe spelled "haXe") that got you started.

But that is no more. I decided to get some of that back.
Based upon the information from the old site and my own need to document this.

#### Visit the [http://matthijskamstra.github.io/haxenode/](http://matthijskamstra.github.io/haxenode/) !


## How to contribute?

Read more about that [here](contribute.md).
But it boils down to: **JUST DO IT!**

#### Visit [https://github.com/MatthijsKamstra/haxenode](https://github.com/MatthijsKamstra/haxenode) to modify the "source" aka markdown files.

Found any "bug" or have a great idea? Please create a [new issue](https://github.com/MatthijsKamstra/haxenode/issues/new).


### How to build?

I will be using [Gitbook](https://github.com/GitbookIO/gitbook#how-to-use-it) to export to static `html`.
You need to install Node.js and then you automatically have NPM:

Install gitbook

```bash
npm install gitbook-cli -g
```

or if you have gitbook installed, update it

```bash
gitbook update
```

I wanted to make the editing of these file as-easy-as-possible.
This gitbook plugin helps with that: [gitbook plugin edit link](https://www.npmjs.com/package/gitbook-plugin-edit-link).
And if all fails, I used [Disqus comments on your books](https://github.com/GitbookIO/plugin-disqus) to add comments at the bottom of each page.

Activate the plugins with:

```bash
gitbook install
```

Export everything to `html`

```bash
gitbook build
```

----

### What is Gitbook?

![Gitbook logo](https://avatars0.githubusercontent.com/u/7111340?v=3&s=200)

I will be using [gitbook](https://github.com/GitbookIO/gitbook) to generate the website.

Primarily reason for this: I have never used it, it uses markdown as input files and it also generates a static `html` site.


### What is Markdown

![Markdown logo](img/markdown-logo-200.png)
A familiar way to write documentation for developers.
This should make it easier to **contribute**!

**Markdown** is a plain text formatting syntax created by John Gruber, aiming to provide a easy-to-read and feasible markup. You can find the original Markdown syntax specification [here](http://daringfireball.net/projects/markdown/syntax).


![MacDown logo](img/macdown-logo-200.png)
**MacDown** is a simple-to-use editor for Markdown documents. It renders your Markdown contents real-time into HTML, and display them in a preview panel. You can download it [here](http://macdown.uranusjr.com/).



### Original Haxenode.org?
You can find the original data at the github account of [theRemix](https://github.com/theRemix/haxenode.org/tree/ajaxloaded/views) in `.jade` files
