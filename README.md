# Local HP Starter

ローカルでホームページ制作を始めるための最小構成です。

## ファイル

- `index.html`: ページ本体
- `styles.css`: 見た目の調整
- `script.js`: 小さな動きや表示制御
- `serve.ps1`: ローカル表示用サーバー

## 起動

PowerShellでこのフォルダを開き、次を実行します。

```powershell
.\serve.ps1 -Port 8080
```

ブラウザで `http://localhost:8080/` を開くと確認できます。
