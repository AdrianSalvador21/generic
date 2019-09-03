import {animate, AnimationTriggerMetadata, style, transition, trigger} from '@angular/animations';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Md5} from 'ts-md5/dist/md5';

declare const require;
const bowser = require('bowser');

export const scrollToElement = (element) => {
  if (element) {
    const distance = window.pageYOffset - Math.abs(element.getBoundingClientRect().y);

    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.getBoundingClientRect().top + window.scrollY - 150
    });

    setTimeout(() => {
      element.focus();
      element.blur(); // Trigger error messages
      element.focus();
    }, distance);
  }
};

export const isBrowserValid = () => {
  const browser = bowser.getParser(window.navigator.userAgent);
  return browser.satisfies({
    windows: {
      'internet explorer': '>10',
    },
    macos: {
      safari: '>10.1'
    },
    chrome: '>20.1.1432',
    firefox: '>31',
    opera: '>22'
  });
};

export const fadeInOut: AnimationTriggerMetadata = trigger('fadeInOut', [
  transition(':enter', [
    style({opacity: 0}),
    animate(500, style({opacity: 1}))
  ]),
  transition(':leave', [
    animate(500, style({opacity: 0}))
  ])
]);

export const loadSVGIcons = (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
};

export const deepCopy = (oldObj: any) => {
  let newObj = oldObj;
  if (oldObj && typeof oldObj === 'object') {
    newObj = Object.prototype.toString.call(oldObj) === '[object Array]' ? [] : {};
    for (let i in oldObj) {
      newObj[i] = deepCopy(oldObj[i]);
    }
  }
  return newObj;
};

export const setHash = (value: string) => {
  const md5 = new Md5();
  md5.appendStr(value);
  return md5.end();
};

export function scrollToTop() {
  /*const stepElement = document.getElementById('app-main-container');*/
  setTimeout(() => {
    /*stepElement.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'instant'});*/
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, 1);
}
