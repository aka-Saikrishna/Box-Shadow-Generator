const preview = document.getElementById("preview");
const styles = document.getElementById("styles");
const ranges = document.querySelectorAll(".settings input");
const copyButton = document.getElementById("copy-styles");

// Adding event-listener to each range inputs
ranges.forEach((slider) =>{
    slider.addEventListener("input", generateStyles)
});

//Function to generate and update styles

function generateStyles(){
    const xShadow = document.getElementById("x-shadow").value;
    const yShadow = document.getElementById("y-shadow").value;
    const blurRadius = document.getElementById("blur-radius").value;
    const shadowOpacity = document.getElementById("shadow-opacity").value;
    const spreadRadius = document.getElementById("spread-radius").value;
    const insetShadow = document.getElementById("inset-shadow").checked;
    const shadowColor = document.getElementById("shadow-color").value;
    const color = document.getElementById("preview-color").value;
    const borderRadius = document.getElementById("border-radius").value;


    // Creating the box shadow CSS property value
    const boxShadow = insetShadow ? `inset ${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowOpacity)}`: `${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowOpacity)}`;

    // Update the preview element styles
    preview.style.backgroundColor = color;
    preview.style.boxShadow = boxShadow;
    preview.style.borderRadius = `${borderRadius}px`;

    // Update textarea with generated styles
    styles.textContent =`box-shadow:${boxShadow};
    \nborder-radius:${borderRadius}px;
    \nbackground-color:${color}`;
}

    // Function to convert hex color and opacity to rgba format
    function hexToRgba (shadowColor, shadowOpacity) {
        const r = parseInt(shadowColor.substr(1, 2), 16);
        const g = parseInt(shadowColor.substr(3, 2), 16);
        const b = parseInt(shadowColor.substr(5, 2), 16);

        return `rgba(${r}, ${g}, ${b}, ${shadowOpacity} )`
    }

    // Function to copy the generated styles
    function copyStyles() {
        styles.select();
        document.execCommand("copy");
        copyButton.innerText = "Copied!";
        setTimeout(() => {
            copyButton.innerText = "Copy Styles";
        }, 500)
    }
generateStyles();