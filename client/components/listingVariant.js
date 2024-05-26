export function getParentDivForVariant(variant, postListingDiv) {
    let variantDiv = postListingDiv.querySelector(`.${variant}`);
    if (!variantDiv) {
        variantDiv = document.createElement('div');
        variantDiv.className = variant;
        postListingDiv.appendChild(variantDiv);
    }
    return variantDiv;
}
