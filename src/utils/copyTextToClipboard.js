const fallbackCopyTextToClipboard = (text) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Header: Unable to copy", err);
  }

  document.body.removeChild(textArea);
};

const copyTextToClipboard = (text) => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    () => {},
    (err) => {
      console.error("Header: Unable to copy by navigator", err);
    },
  );
};

export default copyTextToClipboard;
