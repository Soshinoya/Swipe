const textareaAutoHeight = (input, height) => {
    if (input.current === null) return
    input.style.height = input.setAttribute('style', 'height: ' + (input.scrollHeight + 2) + 'px');
    input.addEventListener('input', e => {
        input.style.height = height + 'px';
        input.style.height = (input.scrollHeight + 2) + 'px';
    });
}

export default textareaAutoHeight