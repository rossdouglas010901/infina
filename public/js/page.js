
// @info Getting Current URL
let currentHost = window.location.host;
let currentURL = window.location.href;
let currentProtocol = window.location.protocol;
let baseURL = currentProtocol + '//' + currentHost;

// @info Getting Object to append onto
let appendObject = document.head;

// @info Creating elemnts
createTitle(pageDetails.pagename);
createMetaTag('description', pageDetails.description)

if(pageDetails.enableDefaultSettings === true){
    // setting Generic Page Properties
    createMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    createCharsetTag();

    // Adding CSS
    createCSSLinkTag('https://unicons.iconscout.com/release/v4.0.0/css/line.css')
    if(pageDetails.pagename == '404'){
        createCSSLinkTag(baseURL + '/css/404.css')
    }else if((baseURL + '/') != currentURL){
        createCSSLinkTag(currentURL + '/styles.css')
    }
    createCSSLinkTag(baseURL + '/css/global.css')

    // Adding Icon Info
    createMetaTag('apple-mobile-web-app-title', 'infina');
    createMetaTag('application-name', 'infina');
    createMetaTag('msapplication-TileColor', '#5f27cd');
    createMetaTag('theme-color', '#ffffff');

    // Linking Icons
    createFaviconLinkTag('apple-touch-icon', 'image/png', baseURL + '/favicons/favicon-32x32.png', '180x180', '');
    createFaviconLinkTag('icon', 'image/png', baseURL + '/favicons/favicon-32x32.png', '32x32', '');
    createFaviconLinkTag('icon', 'image/png', baseURL + '/favicons/favicon-16x16.png', '16x16', '');
    createFaviconLinkTag('manifest', 'application/manifest+json', baseURL + '/favicons/site.webmanifest', '', '');
    createFaviconLinkTag('mask-icon', 'image/svg+xml', baseURL + '/favicons/safari-pinned-tab.svg', '', '#5f27cd');
}

if(pageDetails.insertHeader === true){
    document.getElementsByTagName("BODY")[0].insertAdjacentHTML('afterBegin','\
    <div class="navigation">\
        <div class="logoGroup logogroupSmall" id="logoGroup" onclick="linkAbs(``)">\
            <div class="logoGroupSVGContainer">\
                <img type="image/svg+xml" src="../../img/logos/black.svg"/>\
            </div>\
            <h2>infina</h2>\
        </div>\
        <div class="navigationButtons" id="navigationButtons">\
            <button class="buttonHollowSecondary" onclick="linkAbs(`app/signup`)">\
                Sign Up\
            </button>\
            <button class="buttonHollowDefault" onclick="linkAbs(`app/signin`)">\
                Sign In\
            </button>\
        </div>\
    </div>\
    ');
}

function createTitle(title){
    // @info Sets the title of the page
    document.title = 'infina - ' + title
}

function createMetaTag(name, content){
    // @info Creats A custom meta tag
    var meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    appendToDocument(meta)
}

function createCharsetTag(){
    // @info Sets the charset to UTF-8
    var meta = document.createElement('meta');
    meta.setAttribute('charset', 'UTF-8');
    appendToDocument(meta)
}

function createCSSLinkTag(URL){
    // @info Creats A custom meta tag
    var link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = URL;
    appendToDocument(link)
}

function createFaviconLinkTag(rel, type, href, sizes, color){
    // @info Creats A custom meta tag
    var link = document.createElement('link');
    link.rel  = rel;
    link.type = type;
    if(sizes){
        link.sizes = sizes;
    }
    if(color){
        link.color = color;
    }
    link.href = href;
    appendToDocument(link)
}

function appendToDocument(element){
    // @info Appends an elemnt to the document
    appendObject.insertAdjacentElement('afterBegin', element);
}

function linkAbs(url){
    document.location = baseURL + '/' + url;
}

function changeNavbar(){
    logoutButtons = document.getElementById('navigationButtons').children;
    for(i = 0; i < logoutButtons.length ; i++) {
        logoutButtons[i].style.display = "none";

    }

    document.getElementById('navigationButtons').insertAdjacentHTML('afterBegin','\
    <i class="uil uil-user-circle navbarIcons navbarUserIcon"></i>\
    <div class="navbarUserIconDropdown">\
        <div class="navbarUserIconDropdownItem">\
            <i class="uil uil-sign-out-alt"></i>Signout\
        </div>\
        <div class="navbarUserIconDropdownItem">\
            <i class="uil uil-setting"></i>Settings\
        </div>\
    </div>\
    ');

    navigation = document.getElementById('logoGroup').children;
    for(i = 0; i < navigation.length ; i++) {
        navigation[i].style.display = "none";

    }

    document.getElementById('logoGroup').insertAdjacentHTML('afterBegin','\
    <i class="uil uil-angle-left-b navbarIcons" onclick="history.back()"></i>\
    ');

}