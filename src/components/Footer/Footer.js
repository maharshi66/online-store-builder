import React from 'react';
import "../BrandHeader/BrandHeader.css";
import "tachyons";

const Footer = () => {
  return (
	<div class="bg-light-gray pv2 ph2 ph4-m ph5-l dark-gray right-0 left-0 bottom-0 relative">
	  <small class="f7 db tc">© 2021 <span className="f5 f4-ns brandFontFamily light-purple">Purplish</span>., All Rights Reserved</small>
	  <div class="tc mt2">
	    <a href="/#" title="Language" class="f7 f6-ns dib ph2 ph2-ns link mid-gray dim">Language</a>
	    <a href="/#" title="Terms" class="f7 f6-ns dib ph1 ph2-ns link mid-gray dim">Terms of Use</a>
	    <a href="/#" title="Privacy" class="f7 f6-ns dib ph2 ph2-ns link mid-gray dim">Privacy</a>
	  </div>
	</div>
  )
}

export default Footer;