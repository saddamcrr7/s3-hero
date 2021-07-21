function getPosition(element) {
  let clientRect = element.getBoundingClientRect();
  return {left: clientRect.left + document.body.scrollLeft,
          top: clientRect.top + document.body.scrollTop};
}


export default getPosition;
