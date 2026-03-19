"use client";

import { useState } from "react";
import "./binj.css";

export default function BinjPage() {
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [bottomSubmitted, setBottomSubmitted] = useState(false);

  return (
    <div className="binj-page">
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <nav>
        <a className="nav-logo" href="/binj">
          binj
        </a>
        <a className="nav-cta" href="#waitlist">
          Join waitlist
        </a>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>Launching soon — join the
            waitlist
          </div>
          <h1 className="hero-title">
            Save everything.
            <br />
            <em>Binj it later.</em>
          </h1>
          <p className="hero-sub">
            One place for every TikTok, YouTube video, Reel, and post you want
            to watch later. Organize in collections. See what the world is
            saving.
          </p>
          {!heroSubmitted ? (
            <form
              className="hero-form"
              onSubmit={(e) => {
                e.preventDefault();
                setHeroSubmitted(true);
              }}
            >
              <input
                className="hero-input"
                type="email"
                placeholder="you@email.com"
                required
              />
              <button className="hero-btn" type="submit">
                Join waitlist
              </button>
            </form>
          ) : (
            <div className="form-success show">
              &#10003; You&apos;re on the list. We&apos;ll be in touch.
            </div>
          )}
          <p className="hero-note">Free to use. No spam, ever.</p>
          <div className="hero-platforms">
            <span>Works with</span>
            <div className="plat-dots">
              <div
                className="plat-dot"
                style={{ borderColor: "rgba(204,51,51,0.3)" }}
              >
                &#9654;
              </div>
              <div
                className="plat-dot"
                style={{ borderColor: "rgba(26,158,148,0.3)" }}
              >
                &#9834;
              </div>
              <div
                className="plat-dot"
                style={{ borderColor: "rgba(192,69,106,0.3)" }}
              >
                &#9678;
              </div>
              <div
                className="plat-dot"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                &#120143;
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="phone">
            <div className="phone-notch"></div>
            <div className="phone-inner">
              <div className="phone-status">
                <span>9:41</span>
                <span style={{ fontSize: "10px" }}>&#9679;&#9679;&#9679;</span>
              </div>
              <div className="phone-nav">
                <div className="phone-logo">binj</div>
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  <div className="phone-add">+</div>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "#F5F4F2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                    }}
                  >
                    &#129418;
                  </div>
                </div>
              </div>
              <div className="phone-filters">
                <div className="pf-chip on">All</div>
                <div className="pf-chip">
                  <span
                    className="pf-dot"
                    style={{ background: "#1A9E94" }}
                  ></span>
                  TikTok
                </div>
                <div className="pf-chip">
                  <span
                    className="pf-dot"
                    style={{ background: "#CC3333" }}
                  ></span>
                  YouTube
                </div>
                <div className="pf-chip">
                  <span
                    className="pf-dot"
                    style={{ background: "#C0456A" }}
                  ></span>
                  IG
                </div>
                <div className="pf-chip">
                  <span
                    className="pf-dot"
                    style={{ background: "#1A1A19" }}
                  ></span>
                  X
                </div>
              </div>
              <div className="phone-content">
                {/* YouTube card */}
                <div className="m-yt">
                  <div
                    className="m-yt-thumb thumb-yt-1"
                    style={{ position: "relative" }}
                  >
                    <div className="play-icon"></div>
                  </div>
                  <div className="m-yt-body">
                    <div className="m-yt-plat">
                      <span
                        className="pf-dot"
                        style={{ background: "#CC3333" }}
                      ></span>{" "}
                      YouTube
                    </div>
                    <div className="m-yt-title">
                      The Complete Guide to Building a Second Brain
                    </div>
                    <div className="m-yt-meta">Ali Abdaal &middot; 3h ago</div>
                  </div>
                </div>

                {/* Two vertical TikTok cards */}
                <div className="m-vrow">
                  <div className="m-vc">
                    <div className="m-vc-thumb thumb-tt-1"></div>
                    <div className="m-vc-ov">
                      <div className="m-vc-t">
                        This morning routine changed everything
                      </div>
                      <div className="m-vc-a">@wellnesskai</div>
                    </div>
                  </div>
                  <div className="m-vc">
                    <div className="m-vc-thumb thumb-tt-2"></div>
                    <div className="m-vc-ov">
                      <div className="m-vc-t">Wait for the end&hellip; &#128563;</div>
                      <div className="m-vc-a">@chefmike</div>
                    </div>
                  </div>
                </div>

                {/* X text card */}
                <div className="m-xc">
                  <div className="m-xc-plat">
                    <span
                      className="pf-dot"
                      style={{ background: "#1A1A19" }}
                    ></span>{" "}
                    X
                  </div>
                  <div className="m-xc-q">
                    &ldquo;The best productivity hack isn&apos;t a tool.
                    It&apos;s learning to sit with discomfort and start.&rdquo;
                  </div>
                  <div className="m-xc-a">@naval &middot; 5h ago</div>
                </div>

                {/* Another YouTube card */}
                <div className="m-yt">
                  <div
                    className="m-yt-thumb thumb-yt-2"
                    style={{ position: "relative" }}
                  >
                    <div className="play-icon"></div>
                  </div>
                  <div className="m-yt-body">
                    <div className="m-yt-plat">
                      <span
                        className="pf-dot"
                        style={{ background: "#CC3333" }}
                      ></span>{" "}
                      YouTube
                    </div>
                    <div className="m-yt-title">
                      I Spent 30 Days Living Like a Monk
                    </div>
                    <div className="m-yt-meta">
                      Matt D&apos;Avella &middot; 6h ago
                    </div>
                  </div>
                </div>

                {/* Two IG Reels */}
                <div className="m-vrow">
                  <div className="m-vc">
                    <div className="m-vc-thumb thumb-ig-1"></div>
                    <div className="m-vc-ov">
                      <div className="m-vc-t">
                        Golden hour in Santorini &#10024;
                      </div>
                      <div className="m-vc-a">@travelwithnat</div>
                    </div>
                  </div>
                  <div className="m-vc">
                    <div className="m-vc-thumb thumb-ig-2"></div>
                    <div className="m-vc-ov">
                      <div className="m-vc-t">Film photography is back</div>
                      <div className="m-vc-a">@analogvibes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-tabbar">
              <div className="m-tab on">
                <span className="m-tab-icon">&#8962;</span>
                <span>Saves</span>
              </div>
              <div className="m-tab">
                <span className="m-tab-icon">&#9678;</span>
                <span>Discover</span>
              </div>
              <div className="m-tab">
                <span className="m-tab-icon">&#9638;</span>
                <span>Collections</span>
              </div>
              <div className="m-tab">
                <span className="m-tab-icon">&#9675;</span>
                <span>Profile</span>
              </div>
            </div>
            <div className="m-home-ind"></div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="benefits-label">Why Binj</div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">&#128241;</div>
            <div className="benefit-title">Save from anywhere</div>
            <div className="benefit-desc">
              Share sheet integration on iOS and Android. See a TikTok, tap
              share, tap &ldquo;Save to Binj.&rdquo; Done in 2 seconds.
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">&#128194;</div>
            <div className="benefit-title">Organize into collections</div>
            <div className="benefit-desc">
              Create folders for recipes, inspo, memes, study material —
              whatever. Each with a custom emoji and shareable link.
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">&#128101;</div>
            <div className="benefit-title">Collaborate with friends</div>
            <div className="benefit-desc">
              Share a collection with a 6-digit code. Friends join and add
              content. Like a shared playlist, but for everything.
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">&#127757;</div>
            <div className="benefit-title">See what&apos;s trending</div>
            <div className="benefit-desc">
              The Discover feed shows anonymous saves from everyone on Binj — a
              real-time pulse of what the internet is watching.
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">&#128279;</div>
            <div className="benefit-title">Links, not downloads</div>
            <div className="benefit-desc">
              Nothing is downloaded. Binj saves the link and fetches the
              thumbnail. Your phone storage stays clean.
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">&#9889;</div>
            <div className="benefit-title">Instant previews</div>
            <div className="benefit-desc">
              Rich thumbnails for every platform. YouTube shows 16:9, TikTok and
              Reels show vertical. X posts render as text cards.
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-cta" id="waitlist">
        <h2 className="bottom-title">Stop losing content you love.</h2>
        <p className="bottom-sub">
          Join the waitlist and be first to get access.
        </p>
        {!bottomSubmitted ? (
          <form
            className="bottom-form"
            onSubmit={(e) => {
              e.preventDefault();
              setBottomSubmitted(true);
            }}
          >
            <input
              className="hero-input"
              type="email"
              placeholder="you@email.com"
              required
            />
            <button className="hero-btn" type="submit">
              Join waitlist
            </button>
          </form>
        ) : (
          <div
            className="form-success show"
            style={{ justifyContent: "center", marginTop: "12px" }}
          >
            &#10003; You&apos;re on the list. We&apos;ll be in touch.
          </div>
        )}
      </section>

      <footer>
        <span>&copy; 2026 Binj</span>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/">Florian Thompson</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="mailto:hello@binj.io">Contact</a>
        </div>
      </footer>
    </div>
  );
}
