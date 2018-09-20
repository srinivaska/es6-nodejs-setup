import express from 'express';
import async, { reject } from 'async';

export default class HelperUtils {
  constructor() {}

  reverse(str) {
    return str
      .split('')
      .reverse()
      .join('');
  }
}
