# auctionapi

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Auction Crawler Frontend</h3>

  <p align="center">
    Frontend for CRUD and web crawler to populate and store auction data in a resizable table for price comparison
    <br />
    <br />
    <a href="https://tradingfever.com">View Demo</a>
    ·
    <a href="https://github.com/kitoshi/auctioncrawl/issues">Report Bug</a>
    ·
    <a href="https://github.com/kitoshi/auctioncrawl/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

 <a href="https://gobidup.com">
 <img src="screenshots/projectscreenshot.png" alt="project screenshot" width="480" height="480"></img>
 </a>

This is the frontend portion of a full stack web crawler price comparison. We are using [React](https://reactjs.org/) to create the table component and do some simple math in javascript to populate the price difference column.

Here's why I built this:

    - The ability to compare over 250 items at once saves a huge amount of time spent looking for deals
    - Easy to use hooks that allow efficient rendering based on data updates (useEffect())
    - Table resizing
    - Cost of hosting is zero.
    - Easily scalable for added features

### Built With

- [react](https://reactjs.org/)
- [resizable tables](https://letsbuildui.dev/articles/resizable-tables-with-react-and-css-grid)
- [google cloud platform](https://cloud.google.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kitoshi/auctioncrawl.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->

## Usage

1. You will need to set up the [backend](https://github.com/kitoshi/auctioncrawl-api) first.
2. Replace the URL strings with your backend addresses. For security, you can create a custom .env and import it using process.env.REACT_APP_BACKEND_URL.
   <br>
   <img src="screenshots/frontendURL.png" alt="URL screenshot" width="480" height="240"></img>
3. npm start to run on https://localhost:3000(default)
4. For production, frontend can be hosted on [google cloud platform](https://cloud.google.com/) using their [app engine](https://cloud.google.com/appengine/docs/standard/nodejs/building-app). I used their [SDK](https://cloud.google.com/sdk) to port to the cloud service by command line in my code editor.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/kitoshi/auctioncrawl/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Robert K. Charlton - kitoshi.charlton@gmail.com

Project Link: [https://github.com/kitoshi/auctioncrawl](https://github.com/kitoshi/auctioncrawl)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Brian Haley, framework planning and mentoring](https://github.com/brian-e-haley)
- [R. Finni, resizable table tutorial](https://letsbuildui.dev/articles/resizable-tables-with-react-and-css-grid)
- [O. Drew, readme template](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/kitoshi/auctioncrawl.svg?style=for-the-badge
[contributors-url]: https://github.com/kitoshi/auctioncrawl/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kitoshi/auctioncrawl.svg?style=for-the-badge
[forks-url]: https://github.com/kitoshi/auctioncrawl/network/members
[stars-shield]: https://img.shields.io/github/stars/kitoshi/auctioncrawl.svg?style=for-the-badge
[stars-url]: https://github.com/kitoshi/auctioncrawl/stargazers
[issues-shield]: https://img.shields.io/github/issues/kitoshi/auctioncrawl.svg?style=for-the-badge
[issues-url]: https://github.com/kitoshi/auctioncrawl/issues
[license-shield]: https://img.shields.io/github/license/kitoshi/auctioncrawl.svg?style=for-the-badge
[license-url]: https://github.com/kitoshi/auctioncrawl/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/robert-k-charlton/
