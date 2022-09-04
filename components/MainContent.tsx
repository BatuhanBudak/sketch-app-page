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

              <figure className="app-box__figure items-start">
                <img
                  className="app-box__image app-box__image--mobile"
                  src="images/firstCard/mac-mobile-400.avif"
                  srcSet="/images/firstCard/mac-mobile-400.avif 400w, /images/firstCard/mac-mobile-600.avif 600w, /images/firstCard/mac-mobile-800.avif 800w, /images/firstCard/mac-mobile-1000.avif 1000w, /images/firstCard/mac-mobile-1300.avif 1300w"
                  sizes="92vw"
                  alt="macOS dock with Sketch icon highlighted"
                  loading="lazy"
                />

                <img
                  className="app-box__image app-box__image--desktop app-box__image--right"
                  src="images/firstCard/mac-desktop-587.avif"
                  srcSet="images/firstCard/mac-desktop-587.avif 587w, images/firstCard/mac-desktop-1174.avif 1174w, images/firstCard/mac-desktop-1761.avif 1761w, images/firstCard/mac-desktop-2348.avif 2348w"
                  sizes="(min-width: 1220px) 587px, 50vw"
                  alt="macOS dock with Sketch icon highlighted"
                  loading="lazy"
                />
              </figure>
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

              <figure className="app-box__figure items-end">
                <img
                  className="app-box__image app-box__image--mobile"
                  src={"images/secondCard/sketch-mobile-400.avif"}
                  srcSet="/images/secondCard/sketch-mobile-400.avif 400w, /images/secondCard/sketch-mobile-600.avif 600w, /images/secondCard/sketch-mobile-800.avif 800w, /images/secondCard/sketch-mobile-1000.avif 1000w, /images/secondCard/sketch-mobile-1300.avif 1300w"
                  sizes="92vw"
                  alt="Sketch in a browser window"
                  loading="lazy"
                />

                <img
                  className="app-box__image app-box__image--desktop app-box__image--right"
                  src="images/secondCard/sketch-desktop-587.avif"
                  srcSet="images/secondCard/sketch-desktop-587.avif 587w, images/secondCard/sketch-desktop-1174.avif 1174w, images/secondCard/sketch-desktop-1761.avif 1761w, images/secondCard/sketch-desktop-2348.avif 2348w"
                  sizes="(min-width: 1220px) 587px, 50vw"
                  alt="Sketch in a browser window"
                  loading="lazy"
                />
              </figure>
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
              <figure className="app-box__figure items-end">
                <img
                  className="app-box__image app-box__image--mobile"
                  src={"images/thirdCard/iphone-mobile-400.avif"}
                  srcSet="/images/thirdCard/iphone-mobile-400.avif 400w, /images/thirdCard/iphone-mobile-600.avif 600w, /images/thirdCard/iphone-mobile-800.avif 800w, /images/thirdCard/iphone-mobile-1000.avif 1000w, /images/thirdCard/iphone-mobile-1300.avif 1300w"
                  sizes="92vw"
                  alt="iphone in a browser window"
                  loading="lazy"
                />

                <img
                  className="app-box__image app-box__image--desktop app-box__image--right"
                  src="images/thirdCard/iphone-desktop-587.avif"
                  srcSet="images/thirdCard/iphone-desktop-587.avif 587w, images/thirdCard/iphone-desktop-1174.avif 1174w, images/thirdCard/iphone-desktop-1761.avif 1761w, images/thirdCard/iphone-desktop-2348.avif 2348w"
                  sizes="(min-width: 1220px) 587px, 50vw"
                  alt="iphone in a browser window"
                  loading="lazy"
                />
              </figure>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
