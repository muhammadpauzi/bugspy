const capitalizeFirstLetter = (string = "") => {
    return string[0].toUpperCase() + string.substring(1);
}

export { capitalizeFirstLetter };