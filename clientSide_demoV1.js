var ffxx_chatButton_ffxx = document.getElementById('ffxx_chatBtnID_ffxx');
var ffxx_hideButton_ffxx = document.getElementById('ffxx_hideBtnID_ffxx');
var ffxx_clsButton_ffxx = document.getElementById('ffxx_clsBtnID_ffxx');
var ffxx_resumeButton_ffxx = document.getElementById('ffxx_resumeBtnID_ffxx');
var ffxx_overlayContainer_ffxx = document.getElementById('ffxx_overlayContainerID_ffxx');
var ffxx_overlayBackground_ffxx = document.getElementById('ffxx_overlayBackgroundID_ffxx');
var ffxx_iframe_ffxx = document.getElementById('ffxx_iframeID_ffxx');
var ffxx_url_ffxx = "http://149.28.136.253/sme/account/ecox?lang=EN";

ffxx_chatButton_ffxx.addEventListener('click', function() {
    ffxx_iframe_ffxx.src = ffxx_url_ffxx;
    $(ffxx_overlayBackground_ffxx).fadeIn(100);
    $(ffxx_overlayContainer_ffxx).delay(200).fadeIn(300);
    ffxx_hideButton_ffxx.style.display = 'block';
    ffxx_clsButton_ffxx.style.display = 'block';
    ffxx_chatButton_ffxx.style.display = 'none';
    ffxx_resumeButton_ffxx.style.display = 'none';
    ffxx_hideButton_ffxx.classList.add('ffxx_appear_ffxx');
    ffxx_clsButton_ffxx.classList.add('ffxx_appear_ffxx');
    document.body.style.overflow = 'hidden';
});

ffxx_hideButton_ffxx.addEventListener('click', function() {
    $(ffxx_overlayContainer_ffxx).fadeOut(200);
    $(ffxx_overlayBackground_ffxx).fadeOut(300);
    ffxx_hideButton_ffxx.style.display = 'none';
    ffxx_clsButton_ffxx.style.display = 'none';
    ffxx_chatButton_ffxx.style.display = 'none';
    ffxx_resumeButton_ffxx.style.display = 'block';
    ffxx_resumeButton_ffxx.classList.add('ffxx_appear_ffxx');
    ffxx_hideButton_ffxx.classList.remove('ffxx_appear_ffxx');
    ffxx_clsButton_ffxx.classList.remove('ffxx_appear_ffxx');
    document.body.style.overflow = 'auto';
});

ffxx_resumeButton_ffxx.addEventListener('click', function() {
    $(ffxx_overlayBackground_ffxx).fadeIn(100);
    $(ffxx_overlayContainer_ffxx).delay(200).fadeIn(300);
    ffxx_hideButton_ffxx.style.display = 'block';
    ffxx_clsButton_ffxx.style.display = 'block';
    ffxx_chatButton_ffxx.style.display = 'none';
    ffxx_resumeButton_ffxx.style.display = 'none';
    ffxx_hideButton_ffxx.classList.add('ffxx_appear_ffxx');
    ffxx_clsButton_ffxx.classList.add('ffxx_appear_ffxx');
    ffxx_resumeButton_ffxx.classList.remove('ffxx_appear_ffxx');
    document.body.style.overflow = 'hidden';
});

ffxx_clsButton_ffxx.addEventListener('click', function() {
    $(ffxx_overlayContainer_ffxx).fadeOut(200);
    $(ffxx_overlayBackground_ffxx).fadeOut(300);
    ffxx_hideButton_ffxx.style.display = 'none';
    ffxx_clsButton_ffxx.style.display = 'none';
    ffxx_chatButton_ffxx.style.display = 'block';
    ffxx_resumeButton_ffxx.style.display = 'none';
    ffxx_chatButton_ffxx.classList.add('ffxx_appear_ffxx');
    ffxx_hideButton_ffxx.classList.remove('ffxx_appear_ffxx');
    ffxx_clsButton_ffxx.classList.remove('ffxx_appear_ffxx');
    document.body.style.overflow = 'auto';
});