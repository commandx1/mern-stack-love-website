export const pressArrow = (
  e,
  myGallery,
  numOfLoadedImages,
  setMygallery,
  setSource,
  setActiveText,
  match
) => {
  let b;
  let x;
  let updatedState;
  switch (e.keyCode) {
    case 39:
      myGallery.map((arr) => {
        if (arr.active) {
          b = myGallery.indexOf(arr);
        }
      });
      x =
        b === myGallery.lastIndexOf(myGallery[numOfLoadedImages - 1])
          ? 0
          : b + 1;
      updatedState = myGallery.map((a) =>
        myGallery.indexOf(a) === x
          ? { ...a, active: true }
          : { ...a, active: false }
      );
      setMygallery(updatedState);
      setSource({
        imageUrl: myGallery[x].imageUrl,
        _id: myGallery[x]._id
      });
      setActiveText(myGallery[x].content);
      break;
    case 37:
      myGallery.map((arr) => {
        if (arr.active) {
          b = myGallery.indexOf(arr);
        }
      });
      x =
        b === 0
          ? myGallery.lastIndexOf(myGallery[numOfLoadedImages - 1])
          : b - 1;
      updatedState = myGallery.map((a) =>
        myGallery.indexOf(a) === x
          ? { ...a, active: true }
          : { ...a, active: false }
      );
      setMygallery(updatedState);
      setSource({
        imageUrl: myGallery[x].imageUrl,
        _id: myGallery[x]._id
      });
      setActiveText(myGallery[x].content);
      break;
    // case 40:
    //   myGallery.map((arr) => {
    //     if (arr.active) {
    //       b = myGallery.indexOf(arr);
    //     }
    //   });
    //   if (match) {
    //     if (b + 4 > myGallery.lastIndexOf(myGallery[numOfLoadedImages - 1])) {
    //       x = b % 4;
    //     } else x = b + 4;
    //   } else {
    //     if (b + 8 > myGallery.lastIndexOf(myGallery[numOfLoadedImages - 1])) {
    //       x = b % 8;
    //     } else x = b + 8;
    //   }
    //   updatedState = myGallery.map((a) =>
    //     myGallery.indexOf(a) === x
    //       ? { ...a, active: true }
    //       : { ...a, active: false }
    //   );
    //   setMygallery(updatedState);
    //   setSource(myGallery[x].imageUrl);
    //   setActiveText(myGallery[x].content);

    //   break;
    // case 38:
    //   myGallery.map((arr) => {
    //     if (arr.active) {
    //       b = myGallery.indexOf(arr);
    //     }
    //   });
    //   if (match) {
    //     if (b - 4 < 0) {
    //       if (b + 12 <= myGallery.lastIndexOf(myGallery[numOfLoadedImages - 1])) {
    //         x = b + 12;
    //       }
    //       else if (b + 8 <= myGallery.lastIndexOf(myGallery[numOfLoadedImages - 1])) {
    //         x = b + 8;
    //       }
    //       else if (b + 4 <= myGallery.lastIndexOf(myGallery[numOfLoadedImages - 1])) {
    //         x = b + 4;
    //       } else x = b
    //     } else x = b - 4;
    //   } else {
    //     if (b - 8 < 0) {
    //       if (b + 8 > myGallery.lastIndexOf(myGallery[numOfLoadedImages - 1])) {
    //         x = b;
    //       } else x = b + 8;
    //     } else x = b - 8;
    //   }
    //   updatedState = myGallery.map((a) =>
    //     myGallery.indexOf(a) === x
    //       ? { ...a, active: true }
    //       : { ...a, active: false }
    //   );
    //   setMygallery(updatedState);
    //   setSource(myGallery[x].imageUrl);
    //   setActiveText(myGallery[x].content);
    //   break;
    default:
      break;
  }
};
