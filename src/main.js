const handleSubmit = async event => {
  event.preventDefault();

  const query = input.value.trim();

  if (query === '') {
    iziToast.show({
      title: 'Error',
      message: "Search field can't be empty!",
    });
    return;
  }

  showLoader(); // Show loader at the start

  try {
    const data = await getImagesByQuery(query);
    console.log(data);

    if (data.hits.length === 0) {
      iziToast.show({
        title: 'Error',
        message: 'Sorry, no images found!',
      });
    } else {
      clearGallery();
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.show({
      title: 'Error',
      message: 'Oops, something went wrong. Try again later!',
    });
    console.log(error);
  } finally {
    hideLoader(); // Ensure loader hides at the end, regardless of success or failure
  }
};
