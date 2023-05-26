const form = document.querySelector("#form");
const url = document.querySelector("#url");
const shortUrlResult = document.querySelector("#short-url-result");
const btnCopy = document.querySelector("#btn-copy");

const shortenUrl = async (url) => {
  const BASE_URL = "https://tinyurl.com/api-create.php";
  try {
    const result = await (await fetch(`${BASE_URL}?url=${url}`)).text();
    return result;
  } catch (e) {
    console.log(e);
  }
};

const handleFormSubmit = async (event) => {
  event.preventDefault();

  if (!url.value) {
    return;
  }

  const result = await shortenUrl(url.value);
  shortUrlResult.textContent = result;
};

const handleCopy = () => {
  if (!shortUrlResult.textContent) return;

  const value = shortUrlResult.textContent;
  navigator.clipboard.writeText(value);

  btnCopy.textContent = "Copied!";
  setTimeout(() => (btnCopy.textContent = "Copy"), 2000);
};

form.addEventListener("submit", handleFormSubmit);
btnCopy.addEventListener("click", handleCopy);
