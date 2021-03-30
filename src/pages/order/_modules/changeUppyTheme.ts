export default function changeUppyTheme(){
  document.querySelectorAll('.uppy-Dashboard-AddFiles-title').forEach(el => {
    el.childNodes[0].textContent = 'Click here';
    el.childNodes[1].textContent = 'to browse or shoot';
    el.firstElementChild.classList.add('center-text')
  });
}
