var qrcode = new QRCode(document.getElementById("qrcode"), {
	width: 360,
	height: 360,
	colorDark: '#000000',
	colorLight: '#ffffff',
	logo: 'images/logo3.png',
	logoWidth: 90,
	logoHeight: 90,
	quietZone: 30,
	quietZoneColor: '#ffffff',
	dotScale: 1,
	//backgroundImage: 'images/logo3.png',
	//backgroundImageAlpha: '0.5',
	//logoBackgroundColor: '#ff0000',
	//logoBackgroundTransparent: false,
	//tooltip = true,
	//timing: '#00ff00',
	//timing_H: '#ff0000',
	//timing_V: '#0000ff',
	//autoColor: true,??
	//correctLevel: QRCode.CorrectLevel.H, //H > Q > M > L
	text: "Why the fuck would you scan the QR code when the textbox is empty? Type something first you idiot!!"
});
function genqr() {
	var text = document.getElementById('textbox').value;
	qrcode.makeCode(text);
	qrcode.resize(360, 360);

	if(text == ""){
		qrcode.makeCode("Why the fuck would you scan the QR code when the textbox is empty? Type something first you idiot!!");
	}
}
function colorD() {
	var col = document.getElementById('cold').value;
	qrcode.colorD(col);
}
function colorL() {
	var col = document.getElementById('coll').value;
	qrcode.colorL(col);
}
function colorQ() {
	var col = document.getElementById('qz').value;
	qrcode.colorQ(col);
}
function dots() {
	var val = document.getElementById('dsc').value;
	if(val == "" || val == 0){
		val = 1;
	}
	if(val < 0) {
		val *= -1;
	}
	while(val > 1) {
		val /= 10;
	}
	qrcode.dotS(val);
}
