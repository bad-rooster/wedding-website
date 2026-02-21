# Wedding Website - Status = Hitched! 📨

This project is huge credit to [Sarah French](https://github.com/SarahFrench/wedding-website) as I just trimmed down what she made!

## Inspiration

Took heavy inspiration from [this Wix template](https://www.wix.com/website-template/view/html/1883). 
Copied the UI (parallax, nav positioning) and made my own version of the round header image using [Affinity Designer](https://affinity.serif.com/en-gb/designer/) using a [colour this palette](https://colorhunt.co/palette/faf2da8e97754a503de28f83).

## Tools

Used [Hugo](https://gohugo.io/) to build the site

## Deployment

The GitHub Action runs the `hugo --minify` command to generate the static pages of the site, and then it commit them to the root directory in the `gh_pages` branch. This branch (& the root dir) is the source for the GitHub Pages deployment.

## Tutorials/Resources Used

- [W3 Schools - How TO - Parallax Scrolling](https://www.w3schools.com/howto/howto_css_parallax.asp)
- [Animated Hamburger Menu Tutorial - CSS Effects](https://www.youtube.com/watch?v=dIyVTjJAkLw)
