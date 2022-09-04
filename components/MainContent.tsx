import React from "react";

export default function MainContent() {
  return (
    <main id="content">
      <div className="pad-viewport">
        <div className="apps wrapper">
          {/* <div className="apps__background">
      <img src="https://sketch-cdn.imgix.net/assets/pages/apps/page-background@2x.png?ixlib=rb-4.0.1&amp;w=3000&amp;q=95&amp;fm=png&amp;auto=format&amp;s=09dbf2b54db3fab81bfc7fce74cb84fd" srcset="
          https://sketch-cdn.imgix.net/assets/pages/apps/page-background@2x.png?ixlib=rb-4.0.1&amp;w=1920&amp;q=95&amp;fm=png&amp;auto=format&amp;s=58d2369c65ec133adfd30fe104c14107 1920w,
          https://sketch-cdn.imgix.net/assets/pages/apps/page-background@2x.png?ixlib=rb-4.0.1&amp;w=3000&amp;q=95&amp;fm=png&amp;auto=format&amp;s=09dbf2b54db3fab81bfc7fce74cb84fd 3000w
        " sizes="(min-width: 1600px) 140%, 100%" alt="page background" className="apps__background-image" ">
    </div> */}

          <div className="hero">
            <h1 className="hero__heading entrance total-words">
              <span className="word">Every</span>
              <span className="whitespace"> </span>
              <span className="word">hero</span>
              <span className="whitespace"> </span>
              <span className="word">needs</span>
              <span className="whitespace"> </span>
              <span className="word">a</span>
              <span className="whitespace"> </span>
              <span className="word">sidekick.</span>
              <span className="whitespace"> </span>
              <span className="word">We</span>
              <span className="whitespace"> </span>
              <span className="word">have</span>
              <span className="whitespace"> </span>
              <span className="word">two.</span>{" "}
            </h1>
            <p
              className="hero__lead entrance entrance--fadeUp is-visible was-shown"
              data-controller="entrance"
              data-entrance-is-intersecting-value="true"
            >
              Create with our award-winning macOS app, share your projects in
              the browser (on any platform), and take Sketch with you.
            </p>
          </div>

          <div className="app-boxes">
            <section id="mac" className="app-box app-box--mac app-box--reverse">
              <div className="app-box__inner">
                <div>
                  <p className="app-box__label">for Editors</p>

                  <h2 className="app-box__heading">Design on your Mac</h2>
                  <p className="app-box__blurb">
                    Design, prototype, and illustrate in a truly native macOS
                    app, online or offline. Work in private or collaborate with
                    others, in real time.
                  </p>
                </div>

                <div className="app-box__cta-wrapper">
                  <a
                    href="/downloads/mac/"
                    className="app-box__cta button button--primary"
                  >
                    Download for macOS
                  </a>

                  <ul className="app-box__links">
                    <li className="app-box__link-item">
                      <a href="/updates/" className="app-box__link">
                        Browse old versions
                      </a>
                    </li>

                    <li className="app-box__link-item">
                      <a href="/beta/" className="app-box__link">
                        Download Beta
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <figure className="app-box__figure items-start"><img className="app-box__image app-box__image--mobile" src="https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/macapp-image@4x.png?ixlib=rb-4.0.1&amp;w=400&amp;q=95&amp;fm=png&amp;auto=format&amp;s=2443b28eb7ec9fc760c0cbd1898a246a" srcset="
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/macapp-image@4x.png?ixlib=rb-4.0.1&amp;w=400&amp;q=95&amp;fm=png&amp;auto=format&amp;s=2443b28eb7ec9fc760c0cbd1898a246a 400w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/macapp-image@4x.png?ixlib=rb-4.0.1&amp;w=600&amp;q=95&amp;fm=png&amp;auto=format&amp;s=8e06514db6820bacb059201362689e49 600w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/macapp-image@4x.png?ixlib=rb-4.0.1&amp;w=800&amp;q=95&amp;fm=png&amp;auto=format&amp;s=0ddf78238c9f7cc4b331552f6edcd778 800w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/macapp-image@4x.png?ixlib=rb-4.0.1&amp;w=1000&amp;q=95&amp;fm=png&amp;auto=format&amp;s=a7aecffe9c14e5623defc03d1b464443 1000w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/macapp-image@4x.png?ixlib=rb-4.0.1&amp;w=1300&amp;q=95&amp;fm=png&amp;auto=format&amp;s=f8b3e018eead9b59f3fdd309a2a655cf 1300w" sizes="92vw" alt="macOS dock with Sketch icon highlighted" width="100%" height="auto" -mobile" loading="lazy"><img className="app-box__image app-box__image--desktop app-box__image--right" src="https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/macapp-image@4x.png?ixlib=rb-4.0.1&amp;w=587&amp;q=95&amp;fm=png&amp;auto=format&amp;s=89047234ea6c5229afa13d2d4cb439f3" srcset="
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/macapp-image@4x.png?ixlib=rb-4.0.1&amp;w=587&amp;q=95&amp;fm=png&amp;auto=format&amp;s=89047234ea6c5229afa13d2d4cb439f3 587w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/macapp-image@4x.png?ixlib=rb-4.0.1&amp;w=1174&amp;q=95&amp;fm=png&amp;auto=format&amp;s=d273a9c723dbc0c8e91fb83ffe568f01 1174w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/macapp-image@4x.png?ixlib=rb-4.0.1&amp;w=1761&amp;q=95&amp;fm=png&amp;auto=format&amp;s=a9efdcc9e7b56556ee95969f997f3474 1761w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/macapp-image@4x.png?ixlib=rb-4.0.1&amp;w=2348&amp;q=95&amp;fm=png&amp;auto=format&amp;s=fd11bee6ef32e97b9cf26db1fb9e72e8 2348w" sizes="(min-width: 1220px) 587px, 50vw" alt="macOS dock with Sketch icon highlighted" width="700" height="auto" -desktop" loading="lazy">
    </figure> */}
            </section>

            <section id="web" className="app-box app-box--web">
              <div className="app-box__inner">
                <div>
                  <p className="app-box__label">for Everyone</p>

                  <h2 className="app-box__heading">Explore in your browser</h2>
                  <p className="app-box__blurb">
                    Browse documents, inspect designs, export assets, discuss
                    feedback, manage users, and invite guests — on any computer,
                    in any browser.
                  </p>
                </div>

                <div className="app-box__cta-wrapper">
                  <a href="/c" className="app-box__cta button button--primary">
                    Open the web app
                  </a>
                </div>
              </div>

              {/* <figure className="app-box__figure items-end"><img className="app-box__image app-box__image--mobile" src="https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/webapp-image@4x.png?ixlib=rb-4.0.1&amp;w=400&amp;q=95&amp;fm=png&amp;auto=format&amp;s=50d984e4861d8e010377e0568e4f95b4" srcset="
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/webapp-image@4x.png?ixlib=rb-4.0.1&amp;w=400&amp;q=95&amp;fm=png&amp;auto=format&amp;s=50d984e4861d8e010377e0568e4f95b4 400w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/webapp-image@4x.png?ixlib=rb-4.0.1&amp;w=600&amp;q=95&amp;fm=png&amp;auto=format&amp;s=f0d7dae6762dc79dacf9d0a351ebd793 600w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/webapp-image@4x.png?ixlib=rb-4.0.1&amp;w=800&amp;q=95&amp;fm=png&amp;auto=format&amp;s=c1b55e5d12482f23ea90154a70c05615 800w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/webapp-image@4x.png?ixlib=rb-4.0.1&amp;w=1000&amp;q=95&amp;fm=png&amp;auto=format&amp;s=51c5107771641f32d3f2e97951a43b82 1000w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/webapp-image@4x.png?ixlib=rb-4.0.1&amp;w=1300&amp;q=95&amp;fm=png&amp;auto=format&amp;s=12b9e729688daae783c6838744e7a236 1300w" sizes="92vw" alt="Sketch in a browser window" width="100%" height="auto" -mobile" loading="lazy"><img className="app-box__image app-box__image--desktop app-box__image--left" src="https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/webapp-image@4x.png?ixlib=rb-4.0.1&amp;w=587&amp;q=95&amp;fm=png&amp;auto=format&amp;s=ba418be215ed149bbff70b1dabc95768" srcset="
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/webapp-image@4x.png?ixlib=rb-4.0.1&amp;w=587&amp;q=95&amp;fm=png&amp;auto=format&amp;s=ba418be215ed149bbff70b1dabc95768 587w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/webapp-image@4x.png?ixlib=rb-4.0.1&amp;w=1174&amp;q=95&amp;fm=png&amp;auto=format&amp;s=1b6dbdb47f331bfb12e86a3c22a7f732 1174w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/webapp-image@4x.png?ixlib=rb-4.0.1&amp;w=1761&amp;q=95&amp;fm=png&amp;auto=format&amp;s=3a70b208b893d25ae8c4528e121db69f 1761w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/webapp-image@4x.png?ixlib=rb-4.0.1&amp;w=2348&amp;q=95&amp;fm=png&amp;auto=format&amp;s=09fc665be5ac3779b68254198bcfb954 2348w" sizes="(min-width: 1220px) 587px, 50vw" alt="Sketch in a browser window" width="700" height="auto" -desktop" loading="lazy">
    </figure> */}
            </section>

            <section id="ios" className="app-box app-box--ios app-box--reverse">
              <div className="app-box__inner">
                <div>
                  <p className="app-box__label">for Everyone</p>

                  <h2 className="app-box__heading">Preview on iPhone</h2>
                  <p className="app-box__blurb">
                    View your documents on the go, play prototypes on a real
                    device, and mirror designs as you edit them on your Mac.
                  </p>
                </div>

                <div className="app-box__cta-wrapper">
                  <a
                    href="https://apps.apple.com/app/sketch-view-and-mirror/id1609224699"
                    className="app-box__cta button button--primary"
                  >
                    Download on the App Store
                  </a>

                  <p className="app-box__hint">
                    Our iPhone app works exclusively with Workspace documents.
                  </p>
                </div>
              </div>
              {/* <figure className="app-box__figure items-end">
    <img className="app-box__image app-box__image--mobile" src="https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/iphoneapp-image@4x.png?ixlib=rb-4.0.1&amp;w=400&amp;q=95&amp;fm=png&amp;auto=format&amp;s=2f4c58350ba4a22c2278e488f9e388ef" srcset="
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/iphoneapp-image@4x.png?ixlib=rb-4.0.1&amp;w=400&amp;q=95&amp;fm=png&amp;auto=format&amp;s=2f4c58350ba4a22c2278e488f9e388ef 400w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/iphoneapp-image@4x.png?ixlib=rb-4.0.1&amp;w=600&amp;q=95&amp;fm=png&amp;auto=format&amp;s=9d25396309ebda936b0be70ac55ea2c6 600w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/iphoneapp-image@4x.png?ixlib=rb-4.0.1&amp;w=800&amp;q=95&amp;fm=png&amp;auto=format&amp;s=357a837228861e0db59cb7a5a2700e4f 800w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/iphoneapp-image@4x.png?ixlib=rb-4.0.1&amp;w=1000&amp;q=95&amp;fm=png&amp;auto=format&amp;s=eb7d038bbc449f0193fe8543435fee4a 1000w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/mobile/iphoneapp-image@4x.png?ixlib=rb-4.0.1&amp;w=1300&amp;q=95&amp;fm=png&amp;auto=format&amp;s=610ebb9ceb8079b4c5cfe73ea4866600 1300w" sizes="92vw" alt="Sketch on an iPhone" width="100%" height="auto" -mobile" loading="lazy"><img className="app-box__image app-box__image--desktop app-box__image--right" src="https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/iphoneapp-image@4x.png?ixlib=rb-4.0.1&amp;w=587&amp;q=95&amp;fm=png&amp;auto=format&amp;s=9cef4261ee2f38749603a777a0b06ab1" srcset="
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/iphoneapp-image@4x.png?ixlib=rb-4.0.1&amp;w=587&amp;q=95&amp;fm=png&amp;auto=format&amp;s=9cef4261ee2f38749603a777a0b06ab1 587w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/iphoneapp-image@4x.png?ixlib=rb-4.0.1&amp;w=1174&amp;q=95&amp;fm=png&amp;auto=format&amp;s=d6059e2e9aa057d073c8bc1762504787 1174w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/iphoneapp-image@4x.png?ixlib=rb-4.0.1&amp;w=1761&amp;q=95&amp;fm=png&amp;auto=format&amp;s=fd58e44c465824d1576b9d400ab6e61f 1761w,
          https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/iphoneapp-image@4x.png?ixlib=rb-4.0.1&amp;w=2348&amp;q=95&amp;fm=png&amp;auto=format&amp;s=a3cf3aaa2887e902d02039adac0fd7e4 2348w" sizes="(min-width: 1220px) 587px, 50vw" alt="Sketch on an iPhone" width="700" height="auto" -desktop" loading="lazy">
    </figure> */}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
