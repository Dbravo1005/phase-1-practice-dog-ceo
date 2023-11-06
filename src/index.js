console.log('%c HI', 'color: firebrick');

document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then((response) => response.json())
        .then((data) => {
            const images = data.message;

            const imageContainer = document.getElementById("dog-image-container");

            images.forEach((imgUrl) => {
                const imageElement = document.createElement("img");
                imageElement.src = imgUrl;
                imageContainer.appendChild(imageElement);
            });
        })
        .catch((error) => {
            console.error("Error rendering images:", error);
        });

    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
        .then((response) => response.json())
        .then((data) => {
            const breeds = Object.keys(data.message);

            const breedList = document.getElementById('dog-breeds');

            breeds.forEach((breed) => {
                const breedElement = document.createElement("li");
                breedElement.textContent = breed;
                breedList.appendChild(breedElement);
            });
        })
        .catch((error) => {
            console.error("Error loading dog breeds:", error);
        });

    const grabBreedsFilter = document.getElementById("breed-dropdown");

    grabBreedsFilter.addEventListener("change", function () {
        const selectedLetter = grabBreedsFilter.value;
        filterBreeds(selectedLetter);
    });

    const grabBreedslist = document.querySelectorAll('#dog-breeds li');

    grabBreedslist.forEach((breedItem) => {
        breedItem.addEventListener("click", () => {
            breedItem.style.color = "green";
        });
    });

    function filterBreeds(selectedLetter) {
        const breedItems = document.querySelectorAll('#dog-breeds li');

        breedItems.forEach((breedItem) => {
            if (breedItem.textContent.startsWith(selectedLetter)) {
                breedItem.style.display = 'block';
            } else {
                breedItem.style.display = 'none';
            }
        });
    }
});

  