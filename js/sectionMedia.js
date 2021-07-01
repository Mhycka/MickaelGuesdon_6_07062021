function Media () {
    let eltImage = document.createElement('img');

    function createimgHTML (element){
        eltImage.setAttribute('src', element.image);
        eltImage.setAttribute('alt', element.alt);
        eltImage.setAttribute('role', 'button');
        eltImage.className = 'ph-media';

        return eltImage;
    }

    return {
        eltImage,
        createimgHTML,
    }
}