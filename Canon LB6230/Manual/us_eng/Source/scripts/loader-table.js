try {
	var head = document.getElementsByTagName('head')[0];

	// resource.jsonのロード
	var o = eval(constant);

	// アセットモードの判定
	var asset_mode = o[0]['asset_mode'];

	// フレームパスの取得
	var frame_path = o[0]['frame_path'];

	// テンプレートパスの取得
	var template_path = o[0]['template_path'];

	// 共通フレームをロード
	if (asset_mode == 'web') {

		// style.css
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = template_path + 'style.css';
		head.appendChild(link);

		// jquery.js
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.charset = 'utf-8';
		script.src = frame_path + 'scripts/jquery.js';
		head.appendChild(script);

		// library.js
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.charset = 'utf-8';
		script.src = frame_path + 'scripts/library.js';
		head.appendChild(script);

		// table.js
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.charset = 'utf-8';
		script.src = frame_path + 'scripts/table.js';
		head.appendChild(script);

		// frame_table.css
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = frame_path + 'styles/frame_table.css';
		head.appendChild(link);

	// 配下にあるフレームをロード
	} else {

		// フレームパスを直下にセット
		var frame_path = '../';

		// テンプレートパスを直下にセット
		var template_path = '../contents/styles/style000/';

		// style.css
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = template_path + 'style.css';
		head.appendChild(link);

		// jquery.js
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.charset = 'utf-8';
		script.src = frame_path + 'scripts/jquery.js';
		head.appendChild(script);

		// library.js
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.charset = 'utf-8';
		script.src = frame_path + 'scripts/library.js';
		head.appendChild(script);

		// table.js
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.charset = 'utf-8';
		script.src = frame_path + 'scripts/table.js';
		head.appendChild(script);

		// frame_table.css
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = frame_path + 'styles/frame_table.css';
		head.appendChild(link);
	}

	// 電話番号認識無効化（onloadではタイミングが遅い）
	// <meta name="format-detection" content="telephone=no" />
	var meta = document.createElement('meta');
	meta.setAttribute('name', 'format-detection');
	meta.setAttribute('content', 'telephone=no');
	head.appendChild(meta);
} catch (e) {
}