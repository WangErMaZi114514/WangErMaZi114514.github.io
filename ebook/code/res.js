function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    };
    return null;
 }
 function setImageHref(){
    grade = getQueryString('g');
    book = getQueryString('b');
    page = getQueryString('p');
    document.getElementById('pageIMG').src = 'https://wangermazi114514.github.io/ebook/book_res/'+grade+'/'+book+'/'+page+'.jpg';
 }