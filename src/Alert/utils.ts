
export const openLink = (href: string) => {
    let a = document.createElement("a");
    a.href = href;
    a.target="_blank";
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
    }, 0);
}