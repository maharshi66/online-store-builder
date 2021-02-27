import React from 'react';
import "tachyons";

const Footer = () => {
  return (
	<div class="bg-light-silver pv1 ph1 ph4-m ph4-l dark-gray right-0 left-0 bottom-0">
	  <small class="f7 db tc">© 2021 <span className="f5 f4-ns titleText">Purplish</span>., All Rights Reserved</small>
	  <div class="tc mt2">
	    <a title="Language" class="f7 f6-ns dib ph1 ph2-ns link mid-gray dim">Language</a>
	    <a title="Terms" class="f7 f6-ns dib ph1 ph2-ns link mid-gray dim">Terms of Use</a>
	    <a title="Privacy" class="f7 f6-ns dib ph1 ph2-ns link mid-gray dim">Privacy</a>
	  </div>
	</div>
  )
}

export default Footer;