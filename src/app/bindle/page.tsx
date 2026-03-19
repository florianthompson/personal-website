"use client";

import { useEffect, useRef } from "react";
import "./bindle.css";

const bodyHTML = `
<!-- NAV -->
<nav id="bindle-nav">
  <a href="#" class="nav-logo">bindle<span>.</span></a>
  <a href="#waitlist" class="nav-cta">Join the waitlist</a>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-inner">
    <div class="hero-text">
      <div class="hero-eyebrow">Coming 2026</div>
      <h1 class="hero-h1">Travel like<br>a <em>local,</em> not<br>a tourist</h1>
      <p class="hero-p">Bindle connects you with curated itineraries built by local partners — small businesses, artisans, and storytellers who know their corner of the world better than any guidebook.</p>
      <form class="hero-form" id="hero-waitlist-form">
        <input type="email" class="hero-input" placeholder="Your email" required>
        <button type="submit" class="hero-btn">Join waitlist</button>
      </form>
      <p class="hero-note">Free to join. Be the first to explore.</p>
    </div>
    <div class="hero-phones">
      <!-- Phone 1: Home -->
      <div class="hero-phone hero-phone-1">
        <div class="phone-screen">
          <div class="bg-h1" style="height: 220px; position: relative;">
            <div class="ph-overlay-top"><div class="ph-logo">bindle</div></div>
            <div class="ph-overlay-bottom">
              <div><span class="ph-tag green">Sustainable</span><span class="ph-tag">Curated</span></div>
              <div class="ph-hero-title">Hidden valleys<br>of Oaxaca</div>
              <div class="ph-hero-sub">3-day itinerary with local artisans</div>
            </div>
          </div>
          <div class="ph-search"><span>Where will curiosity take you?</span></div>
          <div class="ph-pills"><span class="ph-pill active">For you</span><span class="ph-pill">Culinary</span><span class="ph-pill">Craft</span><span class="ph-pill">Nature</span></div>
          <div class="ph-content" style="padding-bottom: 50px;">
            <div class="ph-section-head"><span class="ph-section-title">Near you</span><span class="ph-section-link">See all</span></div>
            <div style="display: flex; gap: 6px;">
              <div class="ph-card" style="min-width: 110px;"><div class="ph-card-img" style="height: 70px; background: linear-gradient(135deg, #7a9a8a, #d4dace);"></div><div class="ph-card-body"><div class="ph-card-title">Alpine foraging</div><div class="ph-card-sub">Tegernsee, Bavaria</div></div></div>
              <div class="ph-card" style="min-width: 110px;"><div class="ph-card-img" style="height: 70px; background: linear-gradient(135deg, #b48a6a, #e8caba);"></div><div class="ph-card-body"><div class="ph-card-title">Pottery with Keiko</div><div class="ph-card-sub">Kyoto, Japan</div></div></div>
            </div>
          </div>
          <div class="ph-nav">
            <div class="ph-nav-dot active"></div>
            <div class="ph-nav-dot"></div>
            <div class="ph-nav-dot"></div>
            <div class="ph-nav-dot"></div>
            <div class="ph-nav-dot"></div>
          </div>
        </div>
      </div>
      <!-- Phone 2: Detail -->
      <div class="hero-phone hero-phone-2">
        <div class="phone-screen">
          <div class="bg-h2" style="height: 200px; position: relative;">
            <div class="ph-detail-back"><svg width="10" height="10" fill="none" stroke="#fff" stroke-width="2"><path d="M6 1L2 5 6 9"/></svg></div>
          </div>
          <div style="padding: 14px; background: var(--cream);">
            <div style="margin-bottom: 8px;"><span class="ph-tag" style="background: rgba(94,122,94,0.12); color: var(--forest); backdrop-filter: none;">Craft</span><span class="ph-tag" style="background: rgba(196,98,58,0.1); color: var(--clay); backdrop-filter: none;">Small group</span></div>
            <div style="font-family: 'Instrument Serif', serif; font-size: 18px; color: var(--ink); line-height: 1.15; margin-bottom: 4px;">Handmade pottery with Keiko</div>
            <div style="font-family: 'DM Sans', sans-serif; font-size: 9px; color: var(--stone); margin-bottom: 10px;">Kyoto, Japan &middot; 3 hours &middot; Max 4 guests</div>
            <div style="font-family: 'DM Sans', sans-serif; font-size: 10px; color: var(--ink); line-height: 1.6; margin-bottom: 12px;">Step into Keiko's 80-year-old workshop in a quiet Higashiyama alley. Learn hand-thrown pottery using local clay.</div>
            <div class="ph-host">
              <div class="ph-host-avatar">K</div>
              <div style="flex: 1;"><div class="ph-host-name">Keiko Tanaka</div><div class="ph-host-role">3rd-gen ceramicist</div></div>
              <span class="ph-badge">Local partner</span>
            </div>
            <button class="ph-book-btn">Reserve this experience</button>
            <div class="ph-price">From &euro;65 per person &middot; supports local artisan</div>
          </div>
        </div>
      </div>
      <!-- Phone 3: Explore -->
      <div class="hero-phone hero-phone-3">
        <div class="phone-screen">
          <div style="padding: 36px 14px 0; background: var(--cream);">
            <div class="ph-explore-title">Explore</div>
            <div class="ph-explore-sub">Find your travel style</div>
          </div>
          <div style="padding: 0 14px 50px; background: var(--cream);">
            <div class="ph-style-lg bg-slow"><div class="ph-style-label"><div class="ph-style-name">Slow travel</div><div class="ph-style-count">24 itineraries</div></div></div>
            <div class="ph-style-row">
              <div class="ph-style-sm bg-craft"><div class="ph-style-label"><div class="ph-style-name-sm">Craft &amp;<br>making</div></div></div>
              <div class="ph-style-sm bg-feast"><div class="ph-style-label"><div class="ph-style-name-sm">Feast &amp;<br>flavor</div></div></div>
            </div>
            <div class="ph-style-lg bg-wild"><div class="ph-style-label"><div class="ph-style-name">Into the wild</div><div class="ph-style-count">15 itineraries</div></div></div>
            <div class="ph-style-row">
              <div class="ph-style-sm bg-spirit"><div class="ph-style-label"><div class="ph-style-name-sm">Spirit &amp;<br>wellness</div></div></div>
              <div class="ph-style-sm bg-rhythm"><div class="ph-style-label"><div class="ph-style-name-sm">Rhythm<br>&amp; sound</div></div></div>
            </div>
          </div>
          <div class="ph-nav">
            <div class="ph-nav-dot"></div>
            <div class="ph-nav-dot"></div>
            <div class="ph-nav-dot active"></div>
            <div class="ph-nav-dot"></div>
            <div class="ph-nav-dot"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MANIFESTO -->
<section class="manifesto">
  <div class="manifesto-inner reveal">
    <h2 class="manifesto-h2">The best travel stories don&rsquo;t come from<br>a search engine. They come from <em>someone<br>who actually lives there.</em></h2>
    <p class="manifesto-p">Bindle partners with local small businesses to create authentic, off-the-beaten-path itineraries. Every booking supports the communities you visit.</p>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="how">
  <div class="how-inner">
    <div class="how-eyebrow reveal">How it works</div>
    <h2 class="how-h2 reveal">Three steps to your next unforgettable trip</h2>
    <div class="how-steps">
      <div class="how-step reveal">
        <div class="step-num">01</div>
        <div class="step-title">Tell us your time</div>
        <div class="step-desc">Pick how many days you have and when. No need to know where &mdash; we'll match you to the right itinerary.</div>
      </div>
      <div class="how-step reveal" style="transition-delay: 0.15s;">
        <div class="step-num">02</div>
        <div class="step-title">Browse by style</div>
        <div class="step-desc">Explore travel styles like slow travel, craft &amp; making, or feast &amp; flavor. Each one curated by locals who live it daily.</div>
      </div>
      <div class="how-step reveal" style="transition-delay: 0.3s;">
        <div class="step-num">03</div>
        <div class="step-title">Book with impact</div>
        <div class="step-desc">Every experience goes directly to a local partner. See your impact &mdash; revenue generated, jobs supported, money that stays local.</div>
      </div>
    </div>
  </div>
</section>

<!-- APP SHOWCASE -->
<section class="showcase">
  <div class="showcase-header reveal">
    <div class="showcase-eyebrow">The app</div>
    <h2 class="showcase-h2">Designed for wanderers,<br>not tourists</h2>
  </div>
  <div class="showcase-row">
    <!-- S1: Home -->
    <div class="showcase-item reveal">
      <div class="showcase-phone">
        <div class="phone-screen">
          <div class="bg-h1" style="height: 220px; position: relative;">
            <div class="ph-overlay-top"><div class="ph-logo">bindle</div></div>
            <div class="ph-overlay-bottom">
              <div><span class="ph-tag green">Sustainable</span><span class="ph-tag">Curated</span></div>
              <div class="ph-hero-title">Hidden valleys<br>of Oaxaca</div>
              <div class="ph-hero-sub">3-day itinerary with local artisans</div>
            </div>
          </div>
          <div class="ph-search"><span>Where will curiosity take you?</span></div>
          <div class="ph-pills"><span class="ph-pill active">For you</span><span class="ph-pill">Culinary</span><span class="ph-pill">Craft</span><span class="ph-pill">Nature</span></div>
          <div class="ph-content" style="padding-bottom: 50px;">
            <div class="ph-section-head"><span class="ph-section-title">Near you</span><span class="ph-section-link">See all</span></div>
            <div style="display: flex; gap: 6px;">
              <div class="ph-card" style="min-width: 100px;"><div class="ph-card-img" style="height: 65px; background: linear-gradient(135deg, #7a9a8a, #d4dace);"></div><div class="ph-card-body"><div class="ph-card-title">Alpine foraging</div><div class="ph-card-sub">Tegernsee</div></div></div>
              <div class="ph-card" style="min-width: 100px;"><div class="ph-card-img" style="height: 65px; background: linear-gradient(135deg, #b48a6a, #e8caba);"></div><div class="ph-card-body"><div class="ph-card-title">Pottery with Keiko</div><div class="ph-card-sub">Kyoto</div></div></div>
            </div>
          </div>
          <div class="ph-nav"><div class="ph-nav-dot active"></div><div class="ph-nav-dot"></div><div class="ph-nav-dot"></div><div class="ph-nav-dot"></div><div class="ph-nav-dot"></div></div>
        </div>
      </div>
      <div class="showcase-label">Discover</div>
    </div>
    <!-- S2: Detail -->
    <div class="showcase-item reveal" style="transition-delay: 0.1s;">
      <div class="showcase-phone">
        <div class="phone-screen">
          <div class="bg-h2" style="height: 190px; position: relative;">
            <div class="ph-detail-back"><svg width="10" height="10" fill="none" stroke="#fff" stroke-width="2"><path d="M6 1L2 5 6 9"/></svg></div>
          </div>
          <div style="padding: 14px; background: var(--cream);">
            <div style="font-family: 'Instrument Serif', serif; font-size: 18px; color: var(--ink); line-height: 1.15; margin-bottom: 4px;">Handmade pottery with Keiko</div>
            <div style="font-family: 'DM Sans', sans-serif; font-size: 9px; color: var(--stone); margin-bottom: 10px;">Kyoto &middot; 3h &middot; Max 4</div>
            <div style="font-family: 'DM Sans', sans-serif; font-size: 10px; color: var(--ink); line-height: 1.6; margin-bottom: 10px;">Step into Keiko's 80-year-old workshop. Learn hand-thrown pottery using local clay.</div>
            <div class="ph-host"><div class="ph-host-avatar">K</div><div style="flex:1;"><div class="ph-host-name">Keiko Tanaka</div><div class="ph-host-role">3rd-gen ceramicist</div></div><span class="ph-badge">Local</span></div>
            <button class="ph-book-btn">Reserve experience</button>
            <div class="ph-price">From &euro;65 &middot; supports local artisan</div>
          </div>
        </div>
      </div>
      <div class="showcase-label">Experience</div>
    </div>
    <!-- S3: Itinerary -->
    <div class="showcase-item reveal" style="transition-delay: 0.2s;">
      <div class="showcase-phone">
        <div class="phone-screen">
          <div class="bg-h3" style="height: 150px; position: relative;">
            <div class="ph-detail-back"><svg width="10" height="10" fill="none" stroke="#fff" stroke-width="2"><path d="M6 1L2 5 6 9"/></svg></div>
            <div class="ph-overlay-bottom" style="padding: 10px 14px;">
              <div><span class="ph-tag green">5 local partners</span></div>
              <div style="font-family: 'Instrument Serif', serif; font-size: 17px; color: #fff; line-height: 1.15;">Soul of Lisbon</div>
              <div style="font-family: 'DM Sans', sans-serif; font-size: 9px; color: rgba(255,255,255,0.8);">4 days &middot; fado, food &amp; forgotten corners</div>
            </div>
          </div>
          <div style="padding: 14px; background: var(--cream);">
            <div class="ph-day-tabs"><span class="ph-day-tab active">Day 1</span><span class="ph-day-tab">Day 2</span><span class="ph-day-tab">Day 3</span><span class="ph-day-tab">Day 4</span></div>
            <div class="ph-tl-item"><div class="ph-tl-dot"></div><div><div class="ph-tl-time">9:00 am</div><div class="ph-tl-name">Past&eacute;is with Maria</div><div class="ph-tl-desc">Secret custard recipe from a 4th-gen baker</div></div></div>
            <div class="ph-tl-item"><div class="ph-tl-dot" style="background: var(--clay);"></div><div><div class="ph-tl-time">12:30 pm</div><div class="ph-tl-name">Alfama stories</div><div class="ph-tl-desc">Alleys tourists never find</div></div></div>
            <div class="ph-tl-item"><div class="ph-tl-dot" style="background: var(--moss);"></div><div><div class="ph-tl-time">7:00 pm</div><div class="ph-tl-name">Fado in a living room</div><div class="ph-tl-desc">Intimate fado in Ana's home</div></div></div>
          </div>
        </div>
      </div>
      <div class="showcase-label">Itinerary</div>
    </div>
    <!-- S4: Planner -->
    <div class="showcase-item reveal" style="transition-delay: 0.3s;">
      <div class="showcase-phone">
        <div class="phone-screen">
          <div style="padding: 36px 14px 14px; background: var(--cream);">
            <div class="ph-planner-greeting">Hi there</div>
            <div class="ph-planner-title">How long is your <em>next adventure?</em></div>
            <div class="ph-dur-picker">
              <div class="ph-dur-label">I have...</div>
              <div class="ph-dur-opts">
                <div class="ph-dur-chip">1-2<span class="ph-dur-sub">days</span></div>
                <div class="ph-dur-chip">3-4<span class="ph-dur-sub">days</span></div>
                <div class="ph-dur-chip selected">5-7<span class="ph-dur-sub">days</span></div>
                <div class="ph-dur-chip">8-14<span class="ph-dur-sub">days</span></div>
                <div class="ph-dur-chip">14+<span class="ph-dur-sub">days</span></div>
              </div>
            </div>
            <button class="ph-find-btn">Find my itineraries</button>
            <div class="ph-results-label">3 itineraries match</div>
            <div class="ph-rec-card"><div class="ph-rec-img bg-h5"><div class="ph-rec-match">Perfect match</div></div><div class="ph-rec-body"><div class="ph-rec-name">Hidden valleys of Oaxaca</div><div class="ph-rec-meta">5 days &middot; 7 experiences</div></div></div>
            <div class="ph-rec-card"><div class="ph-rec-img bg-h6"><div class="ph-rec-match" style="background: rgba(196,98,58,0.8);">5 of 7 days</div></div><div class="ph-rec-body"><div class="ph-rec-name">Norwegian fjord trails</div><div class="ph-rec-meta">7 days &middot; 9 experiences</div></div></div>
          </div>
          <div class="ph-nav"><div class="ph-nav-dot"></div><div class="ph-nav-dot active"></div><div class="ph-nav-dot"></div><div class="ph-nav-dot"></div><div class="ph-nav-dot"></div></div>
        </div>
      </div>
      <div class="showcase-label">Trip planner</div>
    </div>
    <!-- S5: Explore -->
    <div class="showcase-item reveal" style="transition-delay: 0.4s;">
      <div class="showcase-phone">
        <div class="phone-screen">
          <div style="padding: 36px 14px 0; background: var(--cream);">
            <div class="ph-explore-title">Explore</div>
            <div class="ph-explore-sub">Find your travel style</div>
          </div>
          <div style="padding: 0 14px 50px; background: var(--cream);">
            <div class="ph-style-lg bg-slow"><div class="ph-style-label"><div class="ph-style-name">Slow travel</div><div class="ph-style-count">24 itineraries</div></div></div>
            <div class="ph-style-row"><div class="ph-style-sm bg-craft"><div class="ph-style-label"><div class="ph-style-name-sm">Craft &amp;<br>making</div></div></div><div class="ph-style-sm bg-feast"><div class="ph-style-label"><div class="ph-style-name-sm">Feast &amp;<br>flavor</div></div></div></div>
            <div class="ph-style-lg bg-wild"><div class="ph-style-label"><div class="ph-style-name">Into the wild</div><div class="ph-style-count">15 itineraries</div></div></div>
            <div class="ph-style-row"><div class="ph-style-sm bg-spirit"><div class="ph-style-label"><div class="ph-style-name-sm">Spirit &amp;<br>wellness</div></div></div><div class="ph-style-sm bg-rhythm"><div class="ph-style-label"><div class="ph-style-name-sm">Rhythm<br>&amp; sound</div></div></div></div>
          </div>
          <div class="ph-nav"><div class="ph-nav-dot"></div><div class="ph-nav-dot"></div><div class="ph-nav-dot active"></div><div class="ph-nav-dot"></div><div class="ph-nav-dot"></div></div>
        </div>
      </div>
      <div class="showcase-label">Explore styles</div>
    </div>
    <!-- S6: Local partner -->
    <div class="showcase-item reveal" style="transition-delay: 0.5s;">
      <div class="showcase-phone">
        <div class="phone-screen">
          <div class="bg-h4" style="height: 110px; position: relative;">
            <div class="ph-detail-back"><svg width="10" height="10" fill="none" stroke="#fff" stroke-width="2"><path d="M6 1L2 5 6 9"/></svg></div>
          </div>
          <div style="padding: 14px; background: var(--cream); display: flex; gap: 10px;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, var(--clay), var(--terracotta-light)); display: flex; align-items: center; justify-content: center; font-family: 'Instrument Serif', serif; font-size: 18px; color: #fff; flex-shrink: 0; margin-top: -20px; border: 2px solid var(--cream);">M</div>
            <div>
              <div style="font-family: 'Instrument Serif', serif; font-size: 16px; color: var(--ink);">Maria's Bakery</div>
              <div style="font-family: 'DM Sans', sans-serif; font-size: 9px; color: var(--stone);">Family bakery &middot; Bel&eacute;m &middot; Since 1952</div>
              <div style="font-family: 'DM Sans', sans-serif; font-size: 9px; color: var(--ink); margin-top: 3px;"><strong>142</strong> guests &middot; <strong>4.9</strong> rating</div>
            </div>
          </div>
          <div style="padding: 0 14px; background: var(--cream);">
            <div style="font-family: 'DM Sans', sans-serif; font-size: 10px; color: var(--ink); line-height: 1.6; margin-bottom: 12px;">Four generations of custard tarts. Maria shares her craft with curious travelers.</div>
            <div style="padding: 10px; background: rgba(94,122,94,0.08); border-radius: 10px; margin-bottom: 12px;">
              <div style="font-family: 'DM Sans', sans-serif; font-size: 8px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--forest); font-weight: 500; margin-bottom: 8px;">Your impact</div>
              <div style="display: flex; gap: 4px; text-align: center;">
                <div style="flex: 1;"><div style="font-family: 'Instrument Serif', serif; font-size: 18px; color: var(--forest);">&euro;12k</div><div style="font-size: 7px; color: var(--stone); text-transform: uppercase; letter-spacing: 0.04em;">Revenue</div></div>
                <div style="flex: 1;"><div style="font-family: 'Instrument Serif', serif; font-size: 18px; color: var(--forest);">3</div><div style="font-size: 7px; color: var(--stone); text-transform: uppercase; letter-spacing: 0.04em;">Jobs</div></div>
                <div style="flex: 1;"><div style="font-family: 'Instrument Serif', serif; font-size: 18px; color: var(--forest);">94%</div><div style="font-size: 7px; color: var(--stone); text-transform: uppercase; letter-spacing: 0.04em;">Stays local</div></div>
              </div>
            </div>
            <div style="font-family: 'Instrument Serif', serif; font-size: 14px; color: var(--ink); margin-bottom: 8px;">Experiences</div>
            <div class="ph-card"><div class="ph-card-img" style="height: 65px; background: linear-gradient(135deg, #8a6a4a, #e8d4c0);"></div><div class="ph-card-body"><div class="ph-card-title">Past&eacute;is masterclass</div><div class="ph-card-sub" style="color: var(--clay); font-weight: 500;">From &euro;45 &middot; 2.5h</div></div></div>
          </div>
          <div class="ph-nav"><div class="ph-nav-dot"></div><div class="ph-nav-dot"></div><div class="ph-nav-dot"></div><div class="ph-nav-dot"></div><div class="ph-nav-dot active"></div></div>
        </div>
      </div>
      <div class="showcase-label">Local partner</div>
    </div>
  </div>
</section>

<!-- VALUES -->
<section class="values">
  <div class="values-inner">
    <div class="values-text reveal">
      <div class="values-eyebrow">Why bindle</div>
      <h2 class="values-h2">Every trip makes a real difference</h2>
      <p class="values-p">We believe the best travel experiences are the ones that give back. Bindle is built on a simple idea: connect travelers directly with the people who make a place special.</p>
      <div class="value-list">
        <div class="value-item">
          <div class="value-icon" style="background: rgba(94,122,94,0.1);">
            <svg width="18" height="18" fill="none" stroke="#2A4A3A" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div><div class="value-name">100% local partners</div><div class="value-desc">Every experience is hosted by a local small business, artisan, or storyteller. No middlemen.</div></div>
        </div>
        <div class="value-item">
          <div class="value-icon" style="background: rgba(196,98,58,0.08);">
            <svg width="18" height="18" fill="none" stroke="#C4623A" stroke-width="1.5" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </div>
          <div><div class="value-name">Transparent impact</div><div class="value-desc">See exactly where your money goes &mdash; revenue generated, jobs supported, percentage that stays local.</div></div>
        </div>
        <div class="value-item">
          <div class="value-icon" style="background: rgba(138,133,120,0.08);">
            <svg width="18" height="18" fill="none" stroke="#8A8578" stroke-width="1.5" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
          </div>
          <div><div class="value-name">Curated, not crowdsourced</div><div class="value-desc">Every itinerary is handpicked and vetted. Quality over quantity, always.</div></div>
        </div>
      </div>
    </div>
    <div class="values-visual reveal" style="transition-delay: 0.2s;">
      <div class="stat-card stat-green"><div class="stat-num">94%</div><div class="stat-label">Revenue stays local</div></div>
      <div class="stat-card stat-clay"><div class="stat-num">50+</div><div class="stat-label">Local partners</div></div>
      <div class="stat-card stat-sand"><div class="stat-num">12</div><div class="stat-label">Countries</div></div>
      <div class="stat-card stat-sand"><div class="stat-num">200+</div><div class="stat-label">Unique experiences</div></div>
      <div class="stat-card stat-wide"><div class="stat-num">&euro;340k+</div><div class="stat-label">Generated for local businesses</div></div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta" id="waitlist">
  <div class="cta-inner reveal">
    <h2 class="cta-h2">Ready to travel<br>with <em>intention?</em></h2>
    <p class="cta-p">Join the waitlist and be among the first to explore curated itineraries powered by local partners around the world.</p>
    <form class="cta-form" id="cta-waitlist-form">
      <input type="email" class="cta-input" placeholder="Your email" required>
      <button type="submit" class="cta-btn">Join waitlist</button>
    </form>
    <p class="cta-note">No spam, ever. Just a heads-up when we launch.</p>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">bindle<span>.</span></div>
  <div class="footer-links">
    <a href="/">Florian Thompson</a>
    <a href="#">About</a>
    <a href="#">Partner with us</a>
    <a href="#">Privacy</a>
  </div>
</footer>

<!-- TOAST -->
<div class="toast" id="bindle-toast">You're on the list &mdash; adventure awaits!</div>
`;

export default function BindlePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scroll-triggered reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    container.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Nav scroll behavior
    const nav = container.querySelector("#bindle-nav") as HTMLElement | null;
    const handleScroll = () => {
      if (nav) {
        nav.classList.toggle("scrolled", window.scrollY > 40);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Waitlist forms
    const showToast = () => {
      const toast = document.getElementById("bindle-toast");
      if (toast) {
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3500);
      }
    };

    const heroForm = container.querySelector("#hero-waitlist-form");
    const ctaForm = container.querySelector("#cta-waitlist-form");

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      (e.target as HTMLFormElement).reset();
      showToast();
    };

    heroForm?.addEventListener("submit", handleSubmit);
    ctaForm?.addEventListener("submit", handleSubmit);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      heroForm?.removeEventListener("submit", handleSubmit);
      ctaForm?.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <div className="bindle-page" ref={containerRef}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap"
        rel="stylesheet"
      />
      <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
    </div>
  );
}
