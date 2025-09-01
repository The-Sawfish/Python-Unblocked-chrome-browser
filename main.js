let historyStack = [];
let historyIndex = -1;

function openURL(url){
    const container = document.getElementById('game-container');
    container.innerHTML = ''; // remove previous iframe
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.setAttribute('loading', 'lazy'); // lazy-load iframe
    container.appendChild(iframe);

    // manage history
    historyStack = historyStack.slice(0, historyIndex+1);
    historyStack.push(url);
    historyIndex++;
}

function goToURL(){
    const url = document.getElementById('url-bar').value;
    if(url) openURL(url);
}

function back(){
    if(historyIndex>0){
        historyIndex--;
        openURL(historyStack[historyIndex]);
    }
}

function forward(){
    if(historyIndex < historyStack.length-1){
        historyIndex++;
        openURL(historyStack[historyIndex]);
    }
}
