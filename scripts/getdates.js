const today = new Date();
const time = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

const currentYear = document.querySelector('#currentyear').innerHTML = `&copy; ${today.getFullYear()}`
const lastModified = document.querySelector('#lastModified').innerHTML = `Date Last Modified: ${new Date(document.lastModified).toLocaleDateString('en-US', { dateStyle: "short" })} ${time}:${minutes}:${seconds}`
